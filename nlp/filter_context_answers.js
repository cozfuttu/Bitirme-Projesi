const fs = require("fs");

const fileName = "qa";

// JSON verisini buraya yapıştırın
const data = JSON.parse(fs.readFileSync(`${fileName}.json`));

// Soruları kontrol edip filtreleyen fonksiyon
function filterQuestions(dataArray) {
  return dataArray.map((item) => {
    const context = item.context;
    const filteredQAs = item.qas.filter((qa) => {
      return qa.answers.every((answer) => {
        return context.includes(answer.text);
      });
    });
    return {
      ...item,
      qas: filteredQAs,
    };
  });
}

// Filtrelenmiş veriyi elde et
const filteredData = filterQuestions(data);

// Sonucu JSON dosyasına kaydet
fs.writeFile(`filtered_${fileName}.json`, JSON.stringify(filteredData, null, 2), (err) => {
  if (err) throw err;
  console.log(`Filtered data has been saved to filtered_${fileName}.json`);
});
