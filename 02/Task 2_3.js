document.write("Rect </br>");
for (var i = 0; i < 4; i++){
	for (var j = 0; j < 10; j++){
		document.write('&nbsp&nbsp*');     
    } 
  document.write("</br>");
}

document.write("</br>");

document.write("Rectangular triangle </br>");
for (var i = 0; i < 5; i++){
	for (var j = 0; j < i + 1; j++){
		document.write('&nbsp&nbsp*');     
    } 
  document.write("</br>");
}
document.write("</br>");


document.write("Equilateral triangle </br>");
for (var i = 0; i < 4; i++){
	for (var j = 4; j > i; j--){
		document.write('&nbsp&nbsp'); 	
	}
	for (var z = 0; z < i; z++){
		document.write('&nbsp&nbsp*');     
    } 
  document.write("</br>");
}

document.write("</br>");

document.write("Rhomb </br>");
for (var i = 0; i < 4; i++){
	for (var j = 4; j > i; j--){
		document.write('&nbsp&nbsp'); 	
	}
	for (var z = 0; z < i; z++){
		document.write('&nbsp&nbsp*');     
    } 
  document.write("</br>");
}
for (var i = 4; i > 0; i--){
	for (var j = 4; j > i; j--){
		document.write('&nbsp&nbsp'); 	
	}
	for (var z = 0; z < i; z++){
		document.write('&nbsp&nbsp*');     
    } 
  document.write("</br>");
}

document.write("</br>");