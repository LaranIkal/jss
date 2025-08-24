

try {
  // Obtain the Java File class
  var FileClass = Java.type('java.io.File');

  // Set File Name
  var file = new FileClass("myFilee.txt");
   
   // Obtain the FileWriter class
  var FileWriterClass = Java.type('java.io.FileWriter');

   // Create a FileWriter instance for new file, passing the File object
   var writer = new FileWriterClass(file);

   // Write content to the file
  writer.write("Hello, my new file first line!\n");
  writer.write("Hello, my new file 2cond line!\n");
    
  // Close the writer to flush the data
  writer.close();  
} catch (error) {
  print("error:" + error )
} finally {}




