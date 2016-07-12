function toConsole(text){
  return console.log(text);
}

function toAlert(text){
  return alert(text);
}

function splitToWords(msg, callback){ 
  if ( arguments.length == 1 ){
    return msg.split(' '); 
  }
  
  if (arguments.length == 2){
    return arguments[1](msg);
  }
}
document.write(splitToWords('My very long text msg</br>'));
document.write(splitToWords('My very long text msg', toConsole));