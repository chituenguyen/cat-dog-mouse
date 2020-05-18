function mouse(name){
	this.name=name
	this.dead=false

}
mouse.prototye.die=function(){
	this.dead=true
}
module.exports= Mouse 