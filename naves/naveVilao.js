const Nave = require("./nave");

class NaveVilao extends Nave {
  // Construtor da nave vilão
  constructor(vida, energia, escudo, canhao){
    super(vida, energia, escudo, canhao);
  }

  ataqueEspecial(){
    let valorAtaque = this.canhao + 100;

    // Gera um valor aleatório entre 5 e 8
    let porcentagemConsumoEnergia = Math.floor((Math.random() * (8 - 5 + 1)) + 5)

    // O valor gerado anteriormente, será transformado em porcentagem. Ex: 5 -> 0.05.
    // Esta porcentagem do dano do ataque que consumirá a energia do objeto nave.
    let consumo =  Math.floor( ((porcentagemConsumoEnergia * 0.1) * valorAtaque) * 0.1);

    /**
      Caso o consumo seja maior que a proṕria energia. Ex consumo 4 -> energia 2. Então o valor de ataque
      será recalculado para que o consumo seja eqivalente ao da energia, com a mesma porcentagem de variação
      de consumo. Exemplo: valor de ataque 51, com uma porcentagem de 8% deste ataque o consumo será 4. Mas se a energia restante
      for 2, consumindo apenas a energia restante (2) com a porcentagem obtida de 8% será recalculado o valor de ataque (25)
      */
    if(consumo > this.energia){
      valorAtaque = (this.energia * 100) / porcentagemConsumoEnergia;
      this.energia = 0;
    } else {
      // Caso a energia for ainda maior ou igual ao que vai ser consumido
      console.log(`Consumo: ${consumo}`);
      console.log(`Energia atual: ${this.energia}`);

      this.energia -= consumo;
    }
    return valorAtaque;
  }
}

module.exports = NaveVilao;