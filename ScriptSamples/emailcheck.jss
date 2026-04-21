
// Using .test(), a built-in JavaScript method on RegExp objects.

var emailForValidation = "user@example.com"
var emailCheckResult = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailForValidation) ? "valid email" : "invalid email"
print(`email ${emailForValidation} is:` + emailCheckResult)

emailForValidation = "userexample.com"
emailCheckResult = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailForValidation) ? "valid email" : "invalid email"
print(`email ${emailForValidation} is:` + emailCheckResult)

// Check multiple emails
var emailAddresses = ["user@example.com", "bad@", "@nodomain", "no at sign", "a@b.c"]
emailAddresses.forEach(function(e) {
  print(e + " -> " + (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? "valid" : "invalid"));
})


