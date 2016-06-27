var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 4],
    maxSequence = 0,
    currentSequence = 1,
    sequance = [];

for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
         currentSequence++;
     }
     else {
        if (currentSequence > maxSequence) {
            maxSequence = currentSequence;
            sequence = array[i];
        }
        currentSequence = 1;
    }
}

document.write("Sequence: ");
for (var i = 0; i < maxSequence; i++) {
    document.write(sequence + " ");
}
