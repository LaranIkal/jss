
/*
console.clear();

(function	() {
		this.name = "Browser";
		setTimeout(function () {
			console.log('TEST=', this.name);
		}, 1000);
	
})()

*/


// In graalvm:
print("\033[2J\033[H"); // ";" needed here, avoiding JavaScript returning print's value as a function, because the next "("

(function () {
  var name = "Browser"
  java.lang.Thread.sleep(1000) // Using Java's sleep
  print('TEST=', name)
})()


