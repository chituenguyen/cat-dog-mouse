var chalk=require('chalk')
function dog(name) {
	// body...
	this.name=name
}
dog.prototype.sayhello = function() {
	console.log('hi i am '+ chalk.blue(this.name))
	// body...
};
module.exports= dog