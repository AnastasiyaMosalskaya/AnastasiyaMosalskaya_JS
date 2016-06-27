var word = new RegExp(prompt("Enter the word"), 'gi');
var text = "We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.";

function search(text, word){
  var  count = 0;
  count = text.match(word);
  return count.length;
} 
  
document.write("Count of substring = " + search(text, word));