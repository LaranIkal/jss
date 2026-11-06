# jss
jss - GraalVM Polyglot Context JavaScript shell

- To install and run an already-built jss, see **`installjss.md`** or **`installjss.pdf`**.

# Why Your Own JavaScript Shell?:
https://github.com/LaranIkal/jss/blob/main/Docs/Why%20Your%20Own%20JavaScript%20Shell.pdf


# Compiling the source code:

- Install Java from graalvm(https://www.graalvm.org/), Go to https://github.com/graalvm/graalvm-ce-builds/releases/,
(GraalVM Community Version, we don't need PGO-Profile-Guided Optimization, which comes with the licensed graalVM version)
  last jss version I used : graalvm-community-25.4.4.1.1+1.1
- Install Maven(https://maven.apache.org/download.cgi), last jss version, I used : Apache Maven 3.9.12
- Configure your path variable to run Java and Maven, example on Linux:

Add to your .bashrc, and restart your computer:

- export PATH="$HOME/Apps/Maven/apache-maven-3.9.12/bin:$PATH"
- export JAVA_HOME="$HOME/Apps/Java/graalvm-community-25.4.4.1.1+1.1"
- export PATH="$JAVA_HOME/bin:$PATH"

*** Restart your computer or load the new settings:
```bash
source ~/.bashrc
```

Open the file manager and go to the directory where you have jss, right-(mouse)clik on empty space and open a terminal window.

Create a jss fat jar: mvn clean package

- Open file manager and go to directory jss/target

For testing, copy jss/target/jss-1.2.jar to directory jss/aworkingjss/jss

Open a terminal windows in jss/aworkingjss/jss/scripts and run: ../jss csv_to_json.jss

Or if you already installed it, let's say, to: ~/Apps/jss, copy jss-1.2.jar to directory ~/Apps/jss
Open a terminal window in ~/Apps/jss/scripts and run: ../jss csv_to_json.jss





