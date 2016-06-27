var array = [3, 1, 2, 3, 4, 4, 2, 2, 4],
    maxSequence = 0,
    curSequence = 1,
    sequence = [];

for (var i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
         curSequence++;
     }
     else {
        if (curSequence > maxSequence) {
            maxSequence = curSequence;
            var pos = 0;
            for (var j = (i - maxSequence + 1); j <= i; j++)
            sequence[pos++] = array[j];
        }
        curSequence = 1;
    }
}


 document.write("The size of sequence: " + maxSequence + "</br>");

for (var i = 0; i < maxSequence; i++){
  document.write(sequence[i] + " ");
}
