package org.jss;

import java.io.*;
import org.graalvm.polyglot.*;

/**
 * JavaScript Scripting using Java and GraalVM
 *
 * Compile with maven: 
 * mvn clean package
 *
 */
public class jss {
  public static void main( String[] args ) throws Exception {

    if (args.length > 0 ) {  
      Context context = Context.newBuilder("js", "regex")
        .allowAllAccess(true)
        .allowHostAccess(HostAccess.ALL)
        .allowHostClassLookup(s -> true)  // allow all classes
        //.allowIO(true)
        .option("engine.WarnInterpreterOnly", "false")
        .build();
        
      // Expose variables values as an array variable to JavaScript
      context.getBindings("js").putMember("parameters", args);

      // Read and evaluate JavaScript File.
      StringBuilder myJsFile = new StringBuilder();
      String line;
      try (BufferedReader br = new BufferedReader(new FileReader(args[0]))) {
        while ((line = br.readLine()) != null) { myJsFile.append(line).append("\n"); }
      }

      context.eval("js", myJsFile.toString());
    } else {
      System.out.println("Provide JavaScript File to be Processed...");
    }
  }
}
