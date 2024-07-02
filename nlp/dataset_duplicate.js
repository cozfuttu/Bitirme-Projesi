const fs = require("fs");
const Papa = require("papaparse");

// Read the CSV file
const csvFilePath = "qa.csv"; // Replace with the path to your CSV file
const csvFileContent = fs.readFileSync(csvFilePath, "utf8");

// Parse the CSV content
Papa.parse(csvFileContent, {
  header: true,
  complete: (results) => {
    const data = results.data;

    // Select random 1,000 rows
    const shuffledData = data.sort(() => 0.5 - Math.random());
    const selectedRows = shuffledData.slice(0, 1000);

    // Convert selected rows back to CSV
    const csvOutput = Papa.unparse(selectedRows, {
      columns: ["question", "answer", "topic"],
    });

    // Write the selected rows to a new CSV file
    const outputFilePath = "output.csv"; // Replace with the desired output file path
    fs.writeFileSync(outputFilePath, csvOutput, "utf8");

    console.log("Random 1,000 rows have been exported to:", outputFilePath);
  },
  error: (error) => {
    console.error("Error parsing CSV:", error);
  },
});
