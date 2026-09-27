# jss
JavaScript Shell

Last project update: September 27 2026

This project will show you how you can create shell scripts using JavaScript and Java.

You can run a JavaScript Shell Script after downloading jss:
- Install Java from graalvm(https://www.graalvm.org/) community(https://github.com/graalvm/graalvm-ce-builds/releases), 
last jss version I used : Java GraalVM Community LTS 25
- Configure your path variable to run Java and Maven, example on Linux:

Add to your .bashrc, and restart your computer:

export JAVA_HOME="$HOME/Apps/Java/graalvm-community-25.3.4.1+1.1"
export PATH="$JAVA_HOME/bin:$PATH"

Open the file manager and go to the directory where you have jss/ScriptSamples/jss/scripts
, right-(mouse)clik on empty space and open a terminal window, and run.


../jss test.jss

You can add jss to your path variable in your.bashrc, like this:
export PATH="$HOME/Apps/jss:$PATH"

On Windows, open a Terminal window and run example:

.\jss.bat .\test.jss

Note. To run the scripts you can use other JDK than GraalVM, like: https://adoptium.net/ JDK 25



# Compiling the source code:

- Install Java from graalvm(https://www.graalvm.org/) community(https://github.com/graalvm/graalvm-ce-builds/releases), 
last jss version I used : Java GraalVM Community LTS 25
- Install Maven(https://maven.apache.org/download.cgi), last jss version, I used : Apache Maven 3.9.12
- Configure your path variable to run Java and Maven, example on Linux:

Add to your .bashrc, and restart your computer:

export PATH="$HOME/Apps/Maven/apache-maven-3.9.12/bin:$PATH"
export JAVA_HOME="$HOME/Apps/Java/graalvm-community-25.3.4.1+1.1"
export PATH="$JAVA_HOME/bin:$PATH"

Open the file manager and go to the directory where you have jss, right-(mouse)clik on empty space and open a terminal window.

Happily compile with: mvn clean package

- Open file manager and go to directory jss/target
- Delete jar: jss-1.2.jar
- Rename jss-1.2-jar-with-dependencies.jar to jss-1.2.jar

For testing, copy jss-1.2.jar to directory jss/ScriptSamples/jss

Open a terminal windows in jss/ScriptSamples/jss and run: ./jss test.jss



