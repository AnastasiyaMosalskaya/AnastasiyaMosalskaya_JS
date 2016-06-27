var firstArray = ['a', 'b', 'c', 'd'],
	secondArray = ['a', 'b', 'c', 'd'],
	flag = 0,
	count = 4;
	
for (var i = 0; i < count; i++){
	if (firstArray[i] > secondArray[i]) 
		flag = 1; 
	else if (firstArray[i] < secondArray[i])
			flag = 2;
}		


if (flag == 1) document.write("The first array is bigger");
	else if (flag == 2)	document.write("The second array is bigger");
		else document.write("Arrays are equal");
