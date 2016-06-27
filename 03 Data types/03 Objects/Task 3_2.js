var array = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];


Array.prototype.remove = function(value){
  var a = [];
  for (var i = 0; i < this.length; i++){
    if (this[i] !== value){
      a.push(this[i]);
    }
  }
  return a;
};

var newArr = array.remove(1);
for (var i = 0; i < newArr.length; i++){
  document.write(newArr[i] + " ");
}