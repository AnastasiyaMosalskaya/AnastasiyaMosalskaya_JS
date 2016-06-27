function cases(text){
  
  var upCase = ['<upcase>', '</upcase>'],
      lowCase = ['<lowcase>', '</lowcase>'],
      mixCase = ['<mixcase>', '</mixcase>'],
      newText = "";
                   
 for (var i = 0; i < text.length; i++){
     if (text.indexOf(upCase[0]) >= 0){
      newText = text.substr( text.indexOf(upCase[0]) + upCase[0].length, text.indexOf(upCase[1]) - (text.indexOf(upCase[0]) + upCase[0].length));
      text = text.replace(newText, newText.toUpperCase());
     }              
 
   if (text.indexOf(lowCase[0]) >= 0){
      newText = text.substr( text.indexOf(lowCase[0]) + lowCase[0].length, text.indexOf(lowCase[1]) - (text.indexOf(lowCase[0]) + lowCase[0].length));
      text = text.replace(newText, newText.toLowerCase());
     } 
 
   if (text.indexOf(mixCase[0]) >= 0){
      newText = text.substr( text.indexOf(mixCase[0]) + mixCase[0].length, text.indexOf(mixCase[1]) - (text.indexOf(mixCase[0]) + mixCase[0].length));
      var mixText = newText;
      for (var j = 0; j < newText.length; j++) {
        mixText = Math.random() > 0.5 ? mixText.replace(newText[j], newText[j].toUpperCase()) : mixText.replace(newText[j], newText[j].toLowerCase());          
      }
      text = text.replace(newText, mixText);
    } 
 }
return text;
}

var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>dont</mixcase> have <lowcase>anyTHIng</lowcase> else.';
document.write(cases(text));