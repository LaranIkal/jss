// GraalVM JavaScript: Read CSV file line by line using Java classes

// Use Java classes to read lines
var BufferedReader = Java.type("java.io.BufferedReader");
var FileReader = Java.type("java.io.FileReader");

// Path to your CSV file
var csvFilePath = "data/sample.csv";
var result;
var reader;

try {
    reader = new BufferedReader(new FileReader(csvFilePath));
} catch (e) {
    result = JSON.stringify({ error: "Cannot read CSV file", message: String(e) });
}

var headers = null;
var data = [];
var line;

while ((line = reader.readLine()) !== null) {
    line = line.trim();
    if (line === "") continue;
    if (!headers) {
        headers = line.split(",");
    } else {
        var values = line.split(",");
        var obj = {};
        for (var i = 0; i < headers.length; i++) {
            obj[headers[i].trim()] = (values[i] || "").trim();
        }
        data.push(obj);
    }
}
reader.close();

// Wrap array in an object for JSON output
print(JSON.stringify({ data: data }))