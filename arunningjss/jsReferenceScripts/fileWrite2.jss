
// Obtain the Java File class
var FileClass = Java.type('java.io.File');
// Obtain the FileWriter class
var FileWriterClass = Java.type('java.io.FileWriter');


// Set File Name
var file = new FileClass("myFile2.txt");

if (file.exists()) {
  print("File exists. Appending content...")
  
  // Open the file in append mode
  var writer = new FileWriterClass(file, true);

  // Write content to the file
  writer.write('Hello, adding content to my file!!!\n');

} else {
  print("File does not exist. Creating a new file...")
  
  // Create a FileWriter instance for new file, passing the File object
  var writer = new FileWriterClass(file);

  // Write content to the file
  writer.write('Hello, my new file!\n');
  


}

// Close the writer to flush the data
writer.close();




