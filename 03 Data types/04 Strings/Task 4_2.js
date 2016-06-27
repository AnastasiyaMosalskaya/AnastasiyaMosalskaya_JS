var expression = 'a+b/((5-d)';
var count = 0,
	error = 0;

for (var i = 0; i < expression.length; i++){
	if (expression[i] == '(') count++;
	else if (expression[i] == ')') count--;

	if (count < 0) error = 1;
}

for (var i = 0; i < expression.length; i++){
	if (expression[i] == '(' && expression[i + 1] == ')') error = 1;
}

if (count || error == 1) document.write("Incorrect expression");
else document.write("Correct expression");