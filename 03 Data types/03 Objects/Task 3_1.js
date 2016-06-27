function createPoints(x, y){
	var point = {
		x: x,
		y: y
	};
	return point;
}

function createLine(beginning, ending){
	var line = {
		begin: beginning,
		end: ending
	};

	return line;
}

function distance(firstPoint, secondPoint){
	return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
}

function createTriangle(firstLine, secondLine, thirdLine){
	var lineA = distance(firstLine.pointA, firstLine.pointB),
		lineB = distance(secondLine.pointA, secondLine.pointB),
		lineC = distance(thirdLine.pointA, thirdLine.pointB);

		if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) return true;
			else return false;
}

