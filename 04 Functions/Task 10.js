function copyright(){
	return function addSign(text){
  		return '\u00A9 ' + text;
  	}; 
}

console.log(copyright()("EPAM"));