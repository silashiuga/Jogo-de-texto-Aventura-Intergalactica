const Nave = require("./nave");

class Vanguarda extends Nave {

  //Construtor da classe Vanguarda
  constructor(energia, escudo, canhao, combustivel, dinheiro, nomeCapitao){
    super(energia, escudo, canhao);
    this.combustivel = combustivel;
    this.dinheiro = dinheiro;
    this.nomeCapitao = nomeCapitao;
  }

  // Adição de energia a nave 
  adicionarEnergia(energia){
    this.energia += energia;
  }

  // Adição de escudo a nave 
  adicionarEscudo(escudo){
    this.escudo += escudo;
  }

  // Adição de canhao a nave 
  adicionarDanoCanhao(dano){
    this.canhao += dano;
  }

  // Adição de combustível a nave 
  adicionarCombustivel(combustivel){
    this.combustivel += combustivel;
  }

  // Exibe o status da nave
  statusNave(){
    console.log();
    console.log(`Energia: ${this.energia}`);
    console.log(`Escudo: ${this.escudo}`);
    console.log(`canhao: ${this.canhao}`);
    console.log(`Combustível: ${this.combustivel} tol`);
    console.log(`Soláris: ${this.dinheiro}`);
    console.log();
  }

  //Exibe o status da nave na chuva de meteoros
  statusNaveMeteoros(){
    console.log();
    console.log(`Energia: ${this.energia}`);
    console.log(`Escudo: ${this.escudo}`);
    console.log();
  }

  // Método responsável por validar o saque
  validarSaque(valor){

    // Se o valor de saque for maior que o dinheiro disponível,
    // esta operação não será feita.
    if(valor > this.dinheiro){
      console.error(`O saldo é insuficiente`);
      return false;
    }
    return true;
  }
  // Método para incrementar o valor do dinheiro
  depositarCofre(valor){
    this.dinheiro += valor;
  }

  // Método para o saque do dinheiro, usado em compras.
  sacarCofre(valor){
    this.dinheiro -= valor;
  }

  // Adição de bônus a nave
  receberBonus(energia, escudo, canhao, combustivel, dinheiro){
    this.energia += energia;
    this.escudo += escudo;
    this.canhao += canhao;
    this.combustivel += combustivel;
    this.dinheiro += dinheiro;
  }

  // Verifica e desconta uma certa quantidade de combustível usado para locomoção entre as fases. 
  consumoCombustivel(combustivelNecessario){
    if(this.combustivel >= combustivelNecessario){
      this.combustivel -= combustivelNecessario;
      return true;
    }
    return false;
  }
}

module.exports = Vanguarda;