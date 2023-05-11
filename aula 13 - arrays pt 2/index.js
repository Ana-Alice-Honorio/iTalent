var name = "Alice";
var age = 29;
var gender = "F";
var hight = 1.62;
var weight = 56;

var data = ["Alice", "Joana", "Maria", "João", "Paulo"];

console.log(data);

console.log(data.indexOf("Maria"));
// // JS é case sensitive, atenção ao escrever

// // pop remove meu último item do array
console.log(data.pop());
console.log(data);

// // splice remove o item passado e tbm é limitado no segundo param
console.log(data.splice(1, 1));
console.log(data);

// primeiro a variável e segundo o indice/param da informação
//  laço de repetição
data.forEach((value, index) => {
  console.log(index + "" + value);
});

// número exato de itens no array
console.log(data.length);

// filtra com os param passados
console.log(data.filter((value) => value.length < 5));
