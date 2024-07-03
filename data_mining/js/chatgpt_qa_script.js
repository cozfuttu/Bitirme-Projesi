const fs = require("fs");
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 10 words - 1 question
const contexts = [
  // contextler buraya girilir.
];

// Mevcut JSON dosyasını okuma fonksiyonu
async function readExistingJson(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// OpenAI API'yi kullanarak Atatürk hakkında sorular ve cevaplar oluşturma fonksiyonu
async function generateQA(context, questionCount) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Sen bir asistansın. Yeni sorular oluşturup cevap vereceksin. Kullanıcı, sana soru ve cevap oluşturabilmen için 'context' verecek. Cevapları JSON yapısında veriyorsun. JSON yapısında key olarak 'qas' olacak. 'qas' bir array olacak ve array içinde de 'id', 'question' ve 'answers' key'lerinden oluşan bir obje olacak. answers, bir array olacak, ve her bir elemanında 'text' ve 'answer_start' olacak. text'in içine yazacağın cevap, 'answer_start' key'inin değerinden başlayacak. text'in içeriğindeki cevabın, context'in içinde birebir aynı bir şekilde bulunuyor olmasına dikkat et. JSON yapısının içine 'context' i koymayacaksın. JSON yapısını örnek olarak aşağıda veriyorum. JSON yapısını oluşturduktan sonra, bu yapının içindeki verileri JSON şeklinde göndereceksin. Örnek JSON yapısı: {  
          "qas": [
              {
                  "id": "00002",
                  "is_impossible": False,
                  "question": "When was the series published?",
                  "answers": [
                      {
                          "text": "between 2006 and 2008",
                          "answer_start": 28,
                      }
                  ],
              },
              {
                  "id": "00003",
                  "is_impossible": False,
                  "question": "What are the three books in the series?",
                  "answers": [
                      {
                          "text": "The Final Empire, The Well of Ascension, and The Hero of Ages",
                          "answer_start": 63,
                      }
                  ],
              },
          ],
      },`,
        },
        {
          role: "user",
          content: `Yapay zeka modelimi (Otomatik soru cevap sistemi) eğitmek için Veri seti oluşturmak istiyorum. Bana, vereceğim context için ${questionCount} adet soru ve cevap oluşturur musun?. Context, \`${context}\` olsun.`,
        },
      ],
      max_tokens: 4000,
      n: 1,
      stop: null,
    });

    const qaPairs = JSON.parse(response.choices[0].message.content);
    return qaPairs.qas; // Sadece 'qas' arrayini döndür
  } catch (error) {
    console.error("Error generating QA:", error);
    return [];
  }
}

// Verileri JSON dosyasına yazma fonksiyonu
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("qa.json dosyasına veriler eklendi.");
}

// Gruplar halinde işlem yapma fonksiyonu
async function processGroup(group, filePath) {
  const qaData = await readExistingJson(filePath);

  const promises = group.map(async (context, i) => {
    console.log(`Generating QA for context ${context.slice(0, 50)}... (${i + 1}/${group.length})...`);
    const questionCount = Math.ceil(context.split(" ").length / 10); // Soru sayısını belirle
    const newQAData = await generateQA(context, questionCount);
    qaData.push({ context, qas: newQAData }); // Her context ile birlikte soruları ekle
  });

  await Promise.all(promises);

  // Tüm verileri JSON dosyasına yaz
  writeJson(filePath, qaData);
}

// Array'i belirli büyüklükteki parçalara bölme fonksiyonu
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, chunkSize + i));
  }
  return chunks;
}

// Ana fonksiyon
async function main() {
  const filePath = "qa.json";

  // contexts array'ini 5'li gruplara böl
  const contextGroups = chunkArray(contexts, 5);

  // Her bir grubu işleme al
  for (const group of contextGroups) {
    await processGroup(group, filePath);
  }
}

// Ana fonksiyonu çalıştır
main();
