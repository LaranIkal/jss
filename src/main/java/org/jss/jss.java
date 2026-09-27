package org.jss;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;

/*

Go to:
 https://github.com/graalvm/graalvm-ce-builds/releases

Pick the JDK 25 build matching your OS/architecture
e.g. graalvm-community-jdk-25i3-25.0.4.1_linux-x64_bin.tar.gz
*/

public class jss {

  public static void main( String[] args ) throws Exception {

    if( args.length == 0 ) {
      System.out.println("Provide JavaScript File to be Processed...");
      return;
    }

    Path jsFile = Path.of(args[0]);

    if( !Files.isRegularFile(jsFile) ) {
      System.err.println("JavaScript file not found: " + jsFile);
      return;
    }

    String source = Files.readString( jsFile, StandardCharsets.UTF_8 );

    try( Context context = Context.newBuilder("js", "regex")
        .allowAllAccess(true) // Allow using Java classes directly
        .option("engine.WarnInterpreterOnly", "false") // Disables compiler fallback logs
        .option("engine.WarnMethodScoping", "false") // Disables host access warning for GraalVM 25+
        .build()
    ) {

      context.getBindings("js").putMember("parameters", args);

      context.eval( Source.newBuilder("js", source, jsFile.toString()).build() );
    } // Catch not needed, main() already propagates exceptions.
  }
}
