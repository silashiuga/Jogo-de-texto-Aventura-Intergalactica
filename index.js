const prompt = require('prompt-sync')();
const Vanguarda = require('./naves/naveVanguarda');
const pergunta = require('./pergunta');
const fase1 = require('./fases/fase1');
const fase2 = require('./fases/fase2');
const fase3 = require('./fases/fase3');
const final = require('./fases/faseFinal');


// Início do jogo
console.log('------------------ Bem vindo ao Jogo Aventura Intergaláctica ------------------');
console.log();

// Contextualização da história
console.log('No ano de 3024, a humanidade alcançou uma gigantesca evolução tecnológica, com inúmeras inovações que até então só existiam nos filmes de ficção.');
console.log('Entre as inovações, houve a possibilidade realizar expedições espaciais em outras galáxias.');
console.log('Consequentemente, também foram descobertas civilizações alienígenas nos novos planetas catalogados.');
console.log('Algumas dessas civilizações, obtiveram boas relações de amizade com os seres humanos, outras nem tanto.');
console.log('Apesar dessas conquistas, o planeta terra se encontrava em grande ecassez de água potável, pois muitos rios e lagos se secaram, e o mar estava contaminado com radiação.');
console.log('Diante dessa situação, foi estipulado que em poucos anos, com a ausência de água limpa, a vida na terra deixará de existir.');
console.log();
console.log('Há um tempo, foi descoberto no planeta Astra, na Galáxia de Centaurus, um minério extremamente raro chamado de Vortex.');
console.log('Este minério é fundamental para construir um reator capaz de converter a água radioativa e tóxica dos oceanos em água potável.');
console.log('Com o intuito de salvar o planeta terra, foi contruído um programa espacial para ir a este planeta e extrair seu minério.');
console.log('Através de um bom planejamento, foram selecionados os tripulantes que participarão desta viagem, constituindo equipes de especialistas em diversas áreas, como: engenheiros, cientistas, exploradores.');

let perguntaTexto = 'Digite o nome do seu personagem que embarcará nesta jornada. Seu posto será o de capitão da nave "Vanguarda": ';
let nome = pergunta(perguntaTexto, 'nome');


// Configuração inicial da nave
let energia = 400;
let escudo = 200;
let canhao = 70;
let combustivel = 100;
let dinheiro = 0;

// Instância da nave
const naveVanguarda = new Vanguarda(energia, escudo, canhao, combustivel, dinheiro, nome );

// Introdução / Treinamento
console.log();
console.log('--------- Chegada a estação de marte ---------');
console.log();
console.log('Com as rotas cálculadas (Via Láctea -> Galáxia Andrômeda -> Galáxia do Cometa -> Galáxia Centaurus), Vanguarda decolou e chegou ao espaço, voando em direção a marte, onde há uma estação tecnológica, para finalizar a configuração da nave.');
console.log('Chegando no planeta, a primeira coisa que os engenheiros fizeram foi alimentar a bateria de energia, que é responsável por garantir o funcionamento dos canhões e do escudo.');
console.log();
console.log(`O capitão foi informado que em cada disparo, uma porcentagem (5% à 8%) do valor será é subtraido na energia`);
console.log(`E os escudos, ao sofrerem dano, são desgastados, e consequentemente uma porcentagem (5%) do dano também é consumido na energia.`);
console.log();
console.log('Caso o nível de energia acabe, a nave ficará sem armas e sem defesa.');
console.log('O combustível é importante para a locomoção no buraco de minhoca (tunel espacial que permite ir de um ponto a outro no universo), e caso acabe, a nave ficará na deriva no espaço.');
console.log('Ao concuírem a configuração, o capitão recebeu 1000 soláris (dinheiro usado para o comércio em todas as galáxias)');
naveVanguarda.depositarCofre(1000);
naveVanguarda.statusNave();
console.log();
console.log('Então partiram e continuaram seu trajeto.');
console.log();

// Executa a fase 1
const f1 = fase1(naveVanguarda)
let faseFinal;

if(f1 == 'Fase 2'){
  const f2 = fase2(naveVanguarda);

  if(f2 == 'Fase 3'){

    const f3 = fase3(naveVanguarda);

    if(f3 == 'Fase Final'){
      faseFinal = final(naveVanguarda);
    }
 
  } else if(f2 == 'Fase Final'){
    faseFinal = final(naveVanguarda);
  }
}





