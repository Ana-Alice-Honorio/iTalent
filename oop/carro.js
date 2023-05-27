const Veiculo = require("./veiculo");

class Carro extends Veiculo {
  constructor(marca, modelo, ano, tipo, combustivel, numOcupantes, numPortas) {
    super(marca, modelo, ano, tipo, combustivel, numOcupantes);
    this.numPortas = numPortas;
  }

  apresentacao() {
    console.log(`${this.marca}, modelo: ${this.modelo} do ano de ${this.ano}`);
  }
}

module.exports = Carro;

// Classe. Constructor. This referenciando
