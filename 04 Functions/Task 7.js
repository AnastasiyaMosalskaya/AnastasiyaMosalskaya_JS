var a = function find(testString, test){
  var position = -1;
  if (test === undefined) test = testString;  
  for (var i = 0; i < testString.length; i++){
    position = testString.indexOf(test);
  }
  return position;
};

document.write(a('abc', 'b'));

