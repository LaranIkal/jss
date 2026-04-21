#!/bin/bash

if [ $# -eq 0 ]
then
	echo "Usage:"
	echo "		jss.sh <javascript file> <parameters like db=mydb, etc, separated by space >"
	exit 1
fi

java -cp jss-1.1.jar:jarlib/* org.jss.jss $*


