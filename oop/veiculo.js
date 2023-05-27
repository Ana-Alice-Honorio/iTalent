class Veiculo {
  constructor(marca, modelo, ano, tipo, combustivel, numOcupantes) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.combustivel = combustivel;
    this.numOcupantes = numOcupantes;
  }
  apresentacao() {
    console.log(`${this.marca}, modelo: ${this.modelo} do ano de ${this.ano}`);
  }

  validar() {
    if (!this.marca) {
      throw new Error("Ops! Esqueceu de preencher nome da marca!");
    } else if (typeof this.marca != "string") {
      throw new Error("não é string!");
    }
    if (!this.modelo) {
      throw new Error("Ops! Falta o modelo!");
    }
  }
}

module.exports = Veiculo;
