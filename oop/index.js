const Carro = require("./carro");
const Moto = require("./moto");

const carro = new Carro("", "Fusca", "1993", "compacto", "gasolina", 5, 2);

const moto = new Moto("BMW", "GS-1200", "2022", "Rally", "gasolina", 2, 1200);

// console.log(carro.apresentacao());

// console.log(moto);
// console.log(moto.apresentacao());

carro.validar();
console.log(carro);

//  Objeto que extend => Herança
// O que faz no pai não altera no filho desde que tenha já em ambos filhos => Polimorfismo
