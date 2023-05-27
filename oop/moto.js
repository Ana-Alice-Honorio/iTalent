const Veiculo = require("./veiculo");

class Moto extends Veiculo {
  constructor(marca, modelo, ano, tipo, combustivel, numOcupantes, cilindrada) {
    super(marca, modelo, ano, tipo, combustivel, numOcupantes);
    this.cilindrada = cilindrada;
  }

  apresentacao() {
    console.log(
      `${this.marca}, modelo: ${this.modelo} do ano de ${this.ano} e ${this.cilindrada} cilindradas`
    );
  }

  acelerar() {}
}

module.exports = Moto;
