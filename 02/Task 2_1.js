var a = 1,
	b = 10,
	summa = 0;

while ( a <= b ){
  if ( a % 2 != 0){
    document.write(a + " ");
  } 
  summa += a;
  a++;
}
	
document.write("</br> Summa from a to b = " + summa);