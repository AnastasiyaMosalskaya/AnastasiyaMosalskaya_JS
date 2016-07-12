var a = function fibo(n){
  var array = new Array(n);
  if (n >= 0) array[0] = 1;
  if (n >= 1) array[1] = 1;
  for (var i = 1; i < n; i++){
    array[i + 1] = array[i] + array[i - 1];
  }
  return array;
};

document.write(a(10));