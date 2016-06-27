function reverseNumber(number) {
	var stringNumber = number.toString();
    var newNumber = "";
	for (var i = stringNumber.length-1; i >= 0; i--)
		newNumber += stringNumber.charAt(i);
	return newNumber;
}

document.write(reverseNumber(12345));