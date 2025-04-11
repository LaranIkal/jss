package org.jss;

import java.io.*;
import org.graalvm.polyglot.*;

/**
 * JavaScript Scripting using Java and GraalVM
 *
 */
public class jss {
  public static void main( String[] args ) throws Exception {

    if (args.length > 0 ) {  
      Context context = Context.newBuilder("js")
        .allowAllAccess(true)
        .allowHostAccess(HostAccess.ALL)
        //.allowHostClassLookup(className -> true)
        .allowIO(true)
        .option("engine.WarnInterpreterOnly", "false")
        .build();
        
      // Expose variables values as an array variable to JavaScript
      context.getBindings("js").putMember("parameters", args);

      // Read and evaluate JavaScript File.
      String myJsFile =  "";
      String line;
      BufferedReader br = new BufferedReader(new FileReader(args[0]));
      while ((line = br.readLine()) != null) { myJsFile += line + "\n"; }
      br.close();

      context.eval("js", myJsFile);    
    } else {
      System.out.println("Provide JavaScript File to be Processed...");
    }
  }
}
