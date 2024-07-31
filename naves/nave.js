danoMinimo = 0;
danoMaximo = 0;

class Nave {
  // Contructor para a atribuição de energia, escudo e canhão
  constructor(energia, escudo, canhao){
    this.energia = energia;
    this.escudo = escudo;
    this.canhao = canhao;
  }

  // Exibe o status da nave para o combate
  statusCombate(){
    console.log();
    console.log(`Energia: ${this.energia}`);
    console.log(`Escudo: ${this.escudo}`);
    console.log(`canhao: ${this.canhao}`);
    console.log();
  }

  // Atribui o dano máximo do canhão (100%) e o dano mínimo (50%)  
  variacaoDano(){
    danoMinimo = this.canhao * 0.5;
    danoMaximo = this.canhao;
  }


  // Função responável por executar o ataque do canhão da nave
  atacar(){
    let valorAtaque = 0;

    // Se o dano do canhão não foi atribuído a variável dano máximo
    // será executado a função variação de dano, para recalcular
    if(danoMaximo != this.canhao){
      this.variacaoDano();
    }

    // Gera um número aleatório entre o dano mínimo e o dano máximo
    valorAtaque = Math.floor((Math.random() * (danoMaximo - danoMinimo + 1)) + danoMinimo);

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
      this.energia -= consumo;
    }
    
    return valorAtaque;
  }

  // Função responsável por executar a defesa. Assim como no ataque
  // quando a nave recebe dano, 5% desse dano é subtraido na energia. 
  defender(ataque){
    let consumo = 0;
    // Subtrai o valor do ataque no escudo
    this.escudo -= ataque;

    // consumo de energia da defesa, 5% do dano recebido. 
    consumo = ataque * 0.05;
    
    // Caso o consumo for maior que o valor da energia, a energia é zerado
    if(consumo >= this.energia){

      this.energia = 0;
    } else {
      // Se a energia for maior, o valor de consumo é subtraido da energia

      this.energia -= consumo;
      this.energia = Math.floor(this.energia);
    }
    
  }
}

module.exports = Nave;