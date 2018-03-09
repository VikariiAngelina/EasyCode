function printName(param,name){
	param(name);
}
printName(function(name){
	alert(name);
},"Ivan");