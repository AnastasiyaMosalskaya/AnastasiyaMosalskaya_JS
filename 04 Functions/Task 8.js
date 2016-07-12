function isNotEmptyStr(string){
	if (typeof string != 'string' || string === '') return false;
      else return true;
}

isNotEmptyStr.str = function(string){
	if (isNotEmptyStr(string)){
   		alert('String is non empty');
 	}
  	else{
    	alert('String is empty');
  	}
};

document.write(isNotEmptyStr.str('1'));