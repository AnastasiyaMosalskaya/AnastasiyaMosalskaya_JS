var text = prompt("Enter the text");
function replace(text){
	var newText = "",
		space = "&nbsp;";
	newText = text.replace(new RegExp(' ', 'g'), space);
	return newText;
}

alert(replace(text));