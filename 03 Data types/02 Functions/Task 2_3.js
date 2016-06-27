var word = prompt("Enter the word");
var text = prompt("Enter the text");
var caseOnOff = prompt("Case insensitive?");


function search(text, word, caseOnOff){
  var count = 0;
  var wordOn = new RegExp(word, 'gi'),
      wordOff = new RegExp(word, 'g');
  
  
  if (caseOnOff)
    count = text.match(wordOn);
  else count = text.match(wordOff);
  return count.length;
}

document.write("Word: " + word + "</br>");
document.write("Text: " + text + "</br>");
document.write("CaseOnOff: " + caseOnOff + "</br>");
document.write("The count of " + word + " = " + search(text, word, caseOnOff));
