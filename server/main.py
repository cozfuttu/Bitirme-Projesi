from flask import Flask, request, jsonify
import torch
from transformers import BertTokenizerFast, BertForQuestionAnswering

app = Flask(__name__)

# Load the model
model = BertForQuestionAnswering.from_pretrained('cozfuttu/results')
tokenizer = BertTokenizerFast.from_pretrained('dbmdz/bert-base-turkish-cased')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    question = data['question']
    context = data['context']

    inputs = tokenizer.encode_plus(question, context, return_tensors="pt", add_special_tokens=True)
    input_ids = inputs["input_ids"].tolist()[0]

    outputs = model(**inputs)
    answer_start_scores = outputs.start_logits
    answer_end_scores = outputs.end_logits

    answer_start = torch.argmax(answer_start_scores)
    answer_end = torch.argmax(answer_end_scores) + 1

    answer = tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end]))

    response = jsonify(answer=answer)
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    app.run(debug=True, port=5000)
