echo off

set JavaScriptFile=%1

java -cp jss-1.0.jar;jarlib/* org.jss.jss %JavaScriptFile%
