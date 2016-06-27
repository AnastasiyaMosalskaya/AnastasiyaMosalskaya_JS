var string = prompt("Enter the string");
function reverse(string){
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--)
    newString += string.charAt(i);
  return newString;
};

document.write(reverse(string));