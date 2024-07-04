const fs = require("fs");

// Function to replace foreign spaces with a regular space
function replaceForeignSpaces(str) {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, " "); // Replace zero-width spaces, zero-width non-joiner, zero-width joiner, and zero-width no-break space
}

// Function to transform the data
function transformData(data) {
  return data
    .map((item) =>
      item.paragraphs.map((paragraph) => ({
        context: paragraph.context,
        qas: paragraph.qas.map((qa) => ({
          id: qa.id.toString().padStart(3, "0"),
          question: replaceForeignSpaces(qa.question.replace(/\s+\?/, "?")),
          answers: qa.answers.map((answer) => ({
            text: replaceForeignSpaces(answer.text),
            answer_start: answer.answer_start,
          })),
        })),
      }))
    )
    .flat(); // Flatten the array to get rid of the nested structure
}

// Read the input file
fs.readFile("qa_collected.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data).data;

    // Transform the data
    const transformedData = transformData(jsonData);

    // Write the transformed data to a new file
    fs.writeFile("transformed_qa.json", JSON.stringify(transformedData, null, 2), "utf8", (err) => {
      if (err) {
        console.error("Error writing the file:", err);
        return;
      }

      console.log("File has been transformed and saved as transformed_qa.json");
    });
  } catch (err) {
    console.error("Error parsing the JSON data:", err);
  }
});
