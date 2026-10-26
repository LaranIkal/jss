
"use strict"

const arr1 = [1,2,3]
Object.freeze(arr1)
// arr1[1] = 3333 // it will not change element 1, since we are using "use strict, If uncommented, it will raise an Exception"
// arr1.push(33) // If uncommented, it will raise an Exception
print(arr1) // Since our object arr1 was frozen, it will print 1,2,3

var name = Object.freeze({name:"Aria"}) // Creating an immutable object
// name.name = "other name" // name will not be updated, an exception is raised because we are using "use strict".
print(name.name)

const nametest = "your name"
nametest = "other string name"
print(nametest)

/*
My conclusion:
If you want immutability in JavaScript, use objects and freeze them, not variables.
Using variables such as let name = "your name" is not immutable, you can reassing the 
reference of the variable to another value, e.g., name = "other name". This is confusing because 
the same variable name now prints a different value, or as some would say, a different reference. 
*/
