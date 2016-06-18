var a = new Array(5);

for (var i = 0; i < 5; i++){
   a[i] = new Array(5);
  for (var j = 0; j < 5; j++){
    a[i][j] = Math.round(Math.random() * 20 - 10);
  }
}

for (var i = 0; i < 5; i++){
  for (var j = 0; j < 5; j++){
    document.write(a[i][j] + " ");
  }
  document.write("</br>");
}

for (var i = 0; i < 5; i++){
  for (var j = i; j < 5; j++){
    if (a[i][i] < 0) a[i][i] = 0;
  }
}


for (var i = 0; i < 5; i++){
  for (var j = 5-i-1; j < 5; j++){
    if (a[i][5-i -1] > 0) a[i][5-i -1] = 1;
  }
}
document.write("</br>New Array </br>");
for (var i = 0; i < 5; i++){
  for (var j = 0; j < 5; j++){
    document.write(a[i][j] + " ");
  }
  document.write("</br>");
}