var radius = prompt("Enter the radius");
var height = prompt("Enter the height");

document.write("Radius = " + radius + " Height = " + height + "</br>");

var volume = 2 * Math.PI * parseFloat(radius) * parseFloat(height);
document.write("V = " + Math.round(volume) + "</br>");

var square = 2 * Math.PI * parseFloat(radius) * (parseFloat(radius) + parseFloat(height));
document.write("S = " + Math.round(square));