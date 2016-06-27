var persons = [
  { firstName: "Artem", lastName: "Ivanov", age: 20},
  { firstName: "Karina", lastName: "Leonova", age: 45},
  { firstName: "Petya", lastName: "Morozov", age: 17},
  { firstName: "Elena", lastName: "Krestenko", age: 35}
];

function youngestPerson(obj){
  var min = obj[0].age;
  var fullName = "";
  for (var i in obj)
    if (obj[i].age < min){
      min = obj[i].age;
      fullName = obj[i].firstName + " " + obj[i].lastName;
    }  
  return fullName;
}

document.write(youngestPerson(persons));