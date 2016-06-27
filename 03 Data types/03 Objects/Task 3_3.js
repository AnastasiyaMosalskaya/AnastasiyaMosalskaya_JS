var human = {
  name: 'Romanova',
  age: 25,
  work: 'programmer'
};

function copy(obj){
  var newObj = obj instanceof Array ? [] : {};
  if (obj === null){
    return obj;
  }
  
  for (var i in obj){
    if (typeof obj[i] === 'object'){
      newObj[i] = copy(obj[i]); 
    }
    else{
      newObj[i] = obj[i];
    }
  }
  return newObj;
}

document.write("Object </br>");
for (var i in human)
  document.write(human[i] + " ");

document.write("</br >Object-copy </br>");
var newHuman = copy(human);
for (var i in newHuman)
  document.write(newHuman[i] + " ");
