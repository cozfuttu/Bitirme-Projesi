const fs = require("fs");

const fileName = "transformed_qa";
const data = JSON.parse(fs.readFileSync(`${fileName}.json`));

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

const filteredData = filterQuestions(data);

fs.writeFile(`filtered_${fileName}.json`, JSON.stringify(filteredData, null, 2), (err) => {
  if (err) throw err;
  console.log(`Filtered data has been saved to filtered_${fileName}.json`);
});
