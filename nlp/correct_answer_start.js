const fs = require("fs");

const fileName = "qa_final";

fs.readFile(`${fileName}.json`, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading qa.json:", err);
    return;
  }

  let jsonData = JSON.parse(data);
  let currentId = 1;

  jsonData.forEach((item) => {
    const context = item.context;

    item.qas.forEach((qa) => {
      qa.id = String(currentId).padStart(5, "0");
      currentId++;

      qa.answers.forEach((answer) => {
        const answerText = answer.text;
        const answerStart = context.indexOf(answerText);
        if (answerStart !== -1) {
          answer.answer_start = answerStart;
        } else {
          console.log(`Answer '${answerText}' not found in context.`);
        }
      });
    });
  });

  fs.writeFile(`${fileName}.json`, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) throw err;
    console.log(`Filtered data has been saved to ${fileName}.json`);
  });
});
