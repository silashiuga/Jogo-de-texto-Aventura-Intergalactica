const prompt = require('prompt-sync')();
const NaveVilao = require('./naves/naveVilao');
let vitoriaVanguarda;

// Cria uma nave inimiga de acordo com as configurações de energia e escudo da nave Vanguarda,
// No nível 1 há um acréscimo de 5% do dano máximo da Vanguarda
// No nível 2 há um acréscimo de 8%
function criarNaveVilao(naveVanguarda, nivel){
  // Atribui os dados da Vanguarda para a nave inimiga
  let energiaVilao;
  let escudoVilao;

  let canhaoVilao = 0;

  // Acrescenta os danos de acordo com o nível do vilão
  if(nivel == 1){
    canhaoVilao = Math.floor(naveVanguarda.canhao + (naveVanguarda.canhao * 0.05));
    energiaVilao = naveVanguarda.energia;
    escudoVilao = naveVanguarda.escudo;

  } else if (nivel == 2){
    canhaoVilao = Math.floor(naveVanguarda.canhao + (naveVanguarda.canhao * 0.08));
    energiaVilao = naveVanguarda.energia;
    escudoVilao = naveVanguarda.escudo;

  } else if (nivel == 3){
    canhaoVilao = 200;
    energiaVilao = 480;
    escudoVilao = 1018;
  }

  // Cria uma nova instância da nave inimiga
  const naveVilao = new NaveVilao(energiaVilao, escudoVilao, canhaoVilao);
  return naveVilao;
}

// Função para simular um dado de 20 lados
function d20(){
  
  // Gera um número aleatório, onde retornará um valor de 0 a 20;
  let valorDado = Math.floor(Math.random() * 21);
    // Caso o número saja 0, será atribuído o valor 1
    if(valorDado == 0){
      valorDado += 1;
    }
    return valorDado;
}

// Função responsável por verificar se o combate acabou.
function verificaVencedor(nomeAtaque, naveVilao, naveVanguarda){

  // Variávieis que armazenam o objeto e o nome das naves de acordo com
  // o ataque e a defesa
  let atacante;
  let defensor;
  let nomeDefesa;

  // Caso Vanguarda for atacante, o defensor será o Ragnor;
  if(nomeAtaque == 'Vanguarda'){
    atacante = naveVanguarda;
    defensor = naveVilao;
    nomeDefesa = 'Ragnor';
  }
  // Caso o Ragner seja o atacante, Vanguarda defenderá;
  else {
    atacante = naveVilao;
    defensor = naveVanguarda;
    nomeDefesa = 'Vanguarda';
  }

  // Avalia as possibilidades de finais
  if(atacante.energia == 0){
    // Se o atacante, em seu último disparo, acabar sua energia, o jogo acabou para ele.
    // Mas ainda há chances de o defensor também ser destruído. 

    //Se o defensor tiver escudo
    if(defensor.escudo > 0){
      // mas não possui energia, ambos perdem
      if(defensor.energia == 0){
        console.log();
        console.log(`${nomeDefesa} perdeu por ficar sem energia.`);
        console.log(`Nave ${nomeAtaque} perdeu por ficar sem energia.`);
        console.log();
      } else {
        // Caso o defensor tenha escudo e energia
        // e esse atacante seja o Ragner, Vanguarda vence.
        if(atacante == 'Ragnor'){
          vitoriaVanguarda =true;
        } 
        // Caso o contrário, Vanguarda perde por não ter energia, e 
        // Ragnor vence, por ter escudo e energia.
        else {
          console.log();
          console.log(`Nave ${nomeAtaque} perdeu por ficar sem energia.`);
          console.log();
        }
      }
    } else {
      // Caso o defensor não tenha escudo
      // e não possui energia.
      if(defensor.energia == 0){
        console.log();
        console.log(`${nomeDefesa} perdeu por ficar sem energia e escudo.`);
        console.log(`Nave ${nomeAtaque} perdeu por ficar sem energia.`);dadoVilao
        console.log();
      } else {
        // e possui energia.
        console.log();
        console.log(`${nomeDefesa} perdeu por ficar sem escudo.`);
        console.log(`Nave ${nomeAtaque} perdeu por ficar sem energia.`);
        console.log();
      }
    }
  } else {
    // Esse parte avalia quando o atacante tem energia
    // Se o defensor possui escudo
    if(defensor.escudo > 0){
      // mas estiver sem energia
      if(defensor.energia == 0){
        console.log();
        console.log(`${nomeDefesa} perdeu por ficar sem energia.`);
        console.log();
        // Caso o defensor seja o Ragner, ele perderá pois não tem energia.
        if(nomeDefesa == 'Ragnor'){
          // Vitória Vanguarda
          vitoriaVanguarda = true;
        }
      }
    } else {
      // Se o defensor não tiver escudo
      // e não tiver energia
      if(defensor.energia == 0){
        console.log();
        console.log(`${nomeDefesa} perdeu por ficar sem energia e escudo.`);
        console.log();
        // Caso o defensor seja o Ragner
        if(nomeDefesa == 'Ragnor'){
           // Vitória Vanguarda
          vitoriaVanguarda = true;
        }
      } else {
        // Se o defensor não tiver escudo
        // mas tem energia
        console.log();
        console.log(`${nomeDefesa} perdeu por ficar sem escudo.`);
        console.log();
        // Se o defensor seja o Ragner
        if(nomeDefesa == 'Ragnor'){
          // Vitória Vanguarda
          vitoriaVanguarda = true;
        }
      }
    }
  }
}

// Função responsável pelo coordernar o combate de ataque e  defesa
module.exports = (naveVanguarda, nivel) => {
  // Verifica se vanguarda vence
  vitoriaVanguarda = false;

  // Criação de uma nave inimiga de acordo com o nível.
  const naveVilao = criarNaveVilao(naveVanguarda, nivel);

  // Loop de batalha, enquanto as naves estiverem escudo e energia, a iteração continuará.
  while(naveVanguarda.escudo > 0 && naveVilao.escudo > 0 && naveVanguarda.energia > 0 && naveVilao.energia > 0){

    // Chama a função que simula um dado de 20 lados;
    const dadoVanguarda = d20();
    const dadoVilao = d20();

    // Exibe os valores de cada dado que representa as naves
    console.log();
    console.log(` Dado Vanguarda ${dadoVanguarda}`);
    console.log(` Dado Vilão ${dadoVilao}`);
    console.log();

    // Variável que armazena o nome da nave que esta atacando.
    let nomeAtacante = '';

    // Se o dado da Vanguarda for maior que o do Ragner
    if(dadoVanguarda >= dadoVilao){

      // Executa o método de ataque no objeto da nave Vanguarda.
      let ataqueVanguarda = naveVanguarda.atacar();

      // Executa o método de defesa no objeto da nave Vilão.
      naveVilao.defender(ataqueVanguarda);
      console.log(` --- Ataque Vanguarda:  ${ataqueVanguarda} ---`);
      console.log();
      // Armazena o nome de quem está atacando
      nomeAtacante = 'Vanguarda';
    } else {
      // Se o dado da Vanguarda for menor que o do Ragner

      let ataqueVilao = 0;

      // Executa o método de ataque no objeto da nave Vilão.
      if(dadoVilao >= 15 && nivel == 3){
        ataqueVilao = naveVilao.ataqueEspecial();
      } else {
        ataqueVilao = naveVilao.atacar();
      }

      // Executa o método de defesa no objeto da nave Vilão.
      naveVanguarda.defender(ataqueVilao);
      console.log(` --- Ataque Vilão:  ${ataqueVilao} --- `);
      console.log();
      // Armazena o nome de quem está atacando
      nomeAtacante = 'Ragnor';
    }

    console.log(`----------- Nave Vanguarda -----------`);
     
      naveVanguarda.statusCombate();
  
      console.log(`----------- Nave Vilão -----------`);
      
      naveVilao.statusCombate();
  
  
      console.log();
      console.log();
  
      prompt('Pressione Enter para continuar');
      
      // Chama o método para verificar se o combate acabou
      verificaVencedor(nomeAtacante, naveVilao, naveVanguarda)
      
  }
  return vitoriaVanguarda;
}