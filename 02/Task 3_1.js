var n = prompt("Enter the size of Array");
var a = new Array(parseInt(n));

for (var i = 0; i < a.length; i++)
  a[i] = Math.round(Math.random() * 100);

document.write("Array </br>");
for (var i = 0; i < a.length; i++)
   document.write(a[i] + " ");

var max = a[0];
for (var i = 1; i < a.length; i++){
  if (a[i] > max) max = a[i];
} 
document.write("</br></br>Max element: " + max + "</br>");

var min = a[0];
for (var i = 1; i < a.length; i++){
  if (a[i] < min) min = a[i];
} 
document.write("Min element: " + min + "</br>");

var summa = 0,
    average = 0;

for (var i = 0; i < n; i++){
  summa += a[i];
} 
average = summa / n;
document.write("Summa: " + summa + "</br>");
document.write("Average: " + average + "</br>");

document.write("Odd elements: ");
for (var i = 0; i < n; i++){
  if (a[i] % 2 != 0){
    document.write(a[i] + " ");
  }
}