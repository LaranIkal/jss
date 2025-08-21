console.clear();
(function	() {
		this.name = "Browser";
		setTimeout(function () {
			console.log('TEST=', this.name);
		}, 1000);
	
})()
