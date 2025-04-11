#!/bin/ksh

if [ $# -eq 0 ]
then
	echo "Usage:"
	echo "		jss.ksh <javascript file> <parameters like db=mydb, etc, separated by space >"
	exit 1
fi

java -cp jss-1.0.jar:jarlib/* org.jss.jss $*


