import React, { useState } from "react";
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";
import axios from "axios";

type ChatBoxProps = {
  addQuestion: (
    input: string,
    generatedAnswer: string,
    context: string,
  ) => void;
};

const ChatBox = ({ addQuestion }: ChatBoxProps) => {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (!question || !context) {
        setError("Question and context are both required.");
        return;
      }
      setError("");
      setLoading(true);
      const generatedAnswer = await getAnswer(question, context);
      addQuestion(
        `${question.length > 50 ? question.slice(0, 50) + "..." : question}`,
        `${generatedAnswer.length > 50 ? generatedAnswer.slice(0, 50) + "... " : generatedAnswer}`,
        `${context.length > 50 ? context.slice(0, 50) + "..." : context}`,
      );
      setAnswer(generatedAnswer);
      setQuestion("");
      setContext("");
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getAnswer = async (question: string, context: string) => {
    const response = await axios.post("/api/predict", {
      question,
      context,
    });
    return response.data.answer;
  };

  return (
    <section className="mx-auto flex h-screen w-3/4 flex-col p-4">
      <h2 className="mb-4 text-xl font-bold">Ask Question</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="mb-2 text-red-500">{error}</p>}
        <textarea
          className="mb-2 w-full rounded border border-gray-300 p-2"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={2}
          placeholder="Enter your question here..."
        />
        <textarea
          className="mb-2 w-full rounded border border-gray-300 p-2"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          rows={4}
          placeholder="Enter your context here..."
        />
        <button
          type="submit"
          className="flex items-center gap-4 rounded bg-[#04052e] px-4 py-2 text-white hover:opacity-75"
        >
          Send
          <div className="flex size-8 items-center justify-center rounded-full bg-white/5">
            <ArrowUpIcon className="size-4" />
          </div>
        </button>
      </form>
      {answer && (
        <div className="mt-4 rounded border border-gray-300 bg-gray-100 p-4">
          <h3 className="font-semibold">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
};

export default ChatBox;
