echo off

set JavaScriptFile=%1

java --enable-native-access=ALL-UNNAMED --sun-misc-unsafe-memory-access=allow -cp jss-1.2.jar;jarlib/* org.jss.jss %JavaScriptFile%
