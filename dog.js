var chalk=require('chalk')
function dog(name) {
	// body...
	this.name=name
	this.stomach=[]
}
dog.prototype.sayhello = function() {
	console.log('hi i am '+ chalk.blue(this.name))
	// body...
};
dog.prototype.eat=function(name){
	this.stomach.push(name)
}
module.exports= dog