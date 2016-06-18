var n = prompt("Enter the number");
number = parseInt(n);
var factorial = 1;

	do{
      if (number == 0){
		factorial = 1;
		break;
		}
		factorial *= number;
		number--;
	}
	while (number > 0);

document.write("The number of possible variants for delivery of goods  = " + factorial);	