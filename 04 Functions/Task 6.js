function parts(){ 
var args = [], 
	colon = ':', 
	period = '.',
	newObj = []; 

for (var i = 0; i < arguments.length; i++){ 
	args[i] = arguments[i];
}

for (var k = 0; k < args.length; k++){
	newObj[k] = args[k].substr(args[k].indexOf(colon) + colon.length, args[k].indexOf(period, args[k].indexOf(colon)) - args[k].indexOf(colon) - 1);
}
return newObj; 
}

document.write(parts('This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.', 'This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.'));