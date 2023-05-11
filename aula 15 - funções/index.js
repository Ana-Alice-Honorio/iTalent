var listPerson = [];

function createPerson(name, age, female) {
  let person = new Object();

  person["name"] = name;
  person["age"] = age;
  person["gender"] = female;

  listPerson.push(person);
}

createPerson("Ana", "20", "F");
createPerson("Maria", "30", "F");
createPerson("Luiza", "15", "F");

console.log(listPerson);

//  arrays, objects and functions
