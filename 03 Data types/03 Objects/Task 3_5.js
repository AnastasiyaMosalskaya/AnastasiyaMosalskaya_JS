var persons = [
  { firstname: "Kirill", lastname: "Petrov", age: 25 },
  { firstname: "Liza", lastname: "Orlova", age: 18 },
  { firstname: "Ilya", lastname: "Petrov", age: 20 },
  { firstname: "Liza", lastname: "Varenik", age: 19 },
  { firstname: "Amanda", lastname: "Swan", age: 18 },
  { firstname: "David", lastname: "Mills", age: 18 }
];

function groupBy(array, groupKey) {
  var groupArray = [];
  for (var i in array) {
    for (var j in array[i]) {
      if (array[i][j] == groupKey) {
        groupArray.push(array[i]['firstname'] + " " + array[i]['lastname'] + " " + array[i]['age']);
      }
    }
  }
  var goodKey =  "Group by " +  groupKey + ": </br>";
  if (groupArray.length != 0)
    return {key: goodKey, value: groupArray + "</br>"};
  else 
    return "No such data";
}

var a1 = groupBy(persons, 18);
for (var i in a1){
  document.write(a1[i]);
}

var a2 = groupBy(persons, 'Liza');
for (var i in a2){
  document.write(a2[i]);
}

var a3 = groupBy(persons, 'Petrov');
for (var i in a3){
  document.write(a3[i]);
}
