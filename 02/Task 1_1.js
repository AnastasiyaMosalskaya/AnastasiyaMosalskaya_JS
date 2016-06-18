var x = 6,
	y = 15,
	z = 4;

x += y - x++ * z;
document.write("First expression: x = " + x + " y = " + y + " z = " + z + "</br>");

z = --x - y * 5;
document.write("Second expression: x = " + x + " y = " + y + " z = " + z + "</br>");

y /= x + 5 % z;
document.write("Third expression: x = " + x + " y = " + y + " z = " + z + "</br>");

z = x++ + y * 5;
document.write("Fourth expression: x = " + x + " y = " + y + " z = " + z + "</br>");

x = y - x++ * z;
document.write("Fifth expression: x = " + x + " y = " + y + " z = " + z);