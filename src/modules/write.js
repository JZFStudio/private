function tree(){
}
 
tree.prototype.add=function(){
	this.leaf++
}
tree.prototype.leaf=1
 
var t1=new tree()
var t2=new tree()
console.log(t1.leaf)  //1
console.log(t2.leaf)  //1
t1.add()
console.log(t1.leaf)  //2
console.log(t2.leaf)  //1