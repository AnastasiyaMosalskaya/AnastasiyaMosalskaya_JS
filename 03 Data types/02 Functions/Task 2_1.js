function lastDigit(number) {
	var string;
	var stringNumber = number.toString();
	var lastNumber = stringNumber.charAt(stringNumber.length - 1);
	switch(lastNumber){
		case '0':
			string = "zero";
			break;
		case '1':
			string = "one";
			break;	
		case '2':
			string = "two";
			break;	
		case '3':
			string = "three";
			break;	
		case '4':
			string = "four";
			break;		
		case '5':
			string = "five";
			break;
		case '6':
			string = "six";
			break;
		case '7':
			string = "seven";
			break;
		case '8':
			string = "eight";
			break;
		case '9':
			string = "nine";
			break;
	}
	return string;
};

document.write(lastDigit(1234));
