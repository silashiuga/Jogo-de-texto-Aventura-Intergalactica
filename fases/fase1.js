const combate = require('../combate');
const pergunta = require('../pergunta');
const passagemFase = require('../passagemFase');
const procurarRecurso = require('../procurarRecurso');

const combustivelNecessario = 70;

module.exports = (naveVanguarda) => {

  // Encontro com a nave Ragnor e início de combate.
  console.log('Passado alguns dias, na Via Láctea, a nave Vanguarda permanecia firme em sua rota, quando derrepente recebeu um sinal de comunicação via rádio frequência.');
  console.log('O sinal era de uma nave de Ragnor, um grupo de alienígenas piratas espaciais, cujo objetivo é saquear e destruir tudo que encontram pela frente.');
  console.log('No sinal havia a seguinte mensagem: "Rendam-se e entreguem a nave, assim poderão sair vivos. Caso o contrário, destruiremos a nave com vocês dentro."');
  console.log();
  console.log(`Logo que viu a mensagem, o capitão ${naveVanguarda.nomeCapitao} perguntou a sua equipe se tinham alguma chance de fuga.`);
  console.log(`Pois ele não queria se envolver em um risco desenecessário na missão de salvar o planeta.`);
  console.log();
  console.log('A equipe de engenheiros tinham escaneado a nave Ragnor, e afirmaram que a tecnologia deles era mais avançada.');
  console.log('Mesmo que Vanguarda tenta-se fugir, a nave vilã iria alcança-los');
  console.log();
  console.log(`Ao saber desta notícia, o capitão ${naveVanguarda.nomeCapitao} mandou uma mensagem de volta, afirmando que não se renderiam.`);
  console.log();
  console.log('Então o combate se iniciou!');

  // Executa a função de combate, caso o retorno for true, Vanguarda venceu.
  // Se o retorno for fase, perdeu.
  let resultadoCombate = combate(naveVanguarda, 1);

  // Caso Vanguarda venceu.
  if(resultadoCombate){
    console.log('Ao ganhar um combate, a nave recebe um bônus de melhoria.');

    // Nave recebe uma melhoria de bônus.
    naveVanguarda.receberBonus(100, 200, 30, 50, 1000);

    // Exibe o novo status da nave
    naveVanguarda.statusNave();
    
    console.log();
    console.log('Quando acabou o confito, foi avistado alguns destroços da nave.');
    console.log(`Então a tripulação de excursão perguntou ao capitão ${naveVanguarda.nomeCapitao} se poderiam inspecionar os destroços, para ver se encontravam algo intacto.`);
    console.log();

    // Chama a função de pergunta, caso a resposta for positivo será retornado true, se for negativo retornará false
    let perguntaTexto = ' Deseja mandar uma equipe para inspecionar os destroços? S - sim ou N - não: ';
    let resposta = pergunta(perguntaTexto, 'pergunta');

    // Caso a respsota for 'S' - sim
    if(resposta == 'S'){
      console.log();
      console.log(`O capitão ${naveVanguarda.nomeCapitao}, concordou em mandar a equipe para verificar os destroços.`);
      console.log();

      // Esta parte do código irá chamar a função 'procuraRecurso' para gerar um valor aleatório e retornar true se for par
      // ou false se for impar. Assim, ele simulará se encontrou um recurso ou não, caso tenha encontrado pontos de melhoria
      // serão aplicados na nave.
      let encontraramAlgo = procurarRecurso();

      // Caso tenham encontrado
      if(encontraramAlgo){
        console.log('Chegando no local, encontram uma peça que compõem o canhão Ragnor, e trouxeram a nave.');
        console.log(`Ao ver a peça, ${naveVanguarda.nomeCapitao} disse, 'Que bom que escontraram este objeto, ele pode ser implementado no canhão e aumentar seu dano máximo.'`);
        console.log('Ganho de dano em 50 pontos');

        // Será incrementado 50 pontos no dano máximo do canhão 
        naveVanguarda.adicionarDanoCanhao(50);
  
        // Exibe o novo status da nave
        naveVanguarda.statusNave();
      } else {
        // Caso não tenham encontrado

        console.log('Chegando no local, a equipe não encontrou peças em condições que poderiam ser aproveitadas, então voltaram a nave.');
      }
    } else {
      // Se a resposta for 'N' - não

      console.log();
      console.log(`É melhor não, receio que não sobrou muita coisa boa entre esses destroços, disse ${naveVanguarda.nomeCapitao}.`);
    }

    // Avisa ao jogador que para passar de uma gálaxia a outra (fase) é necessário a nave ter uma determinda
    // quantidade de combustível
    console.log();
    console.log('Logo, continuaram seu trajeto a caminho do túnel espacial que leva a Galáxia de Andrômeda, segundo a rota, o próximo destino.');

    // Se há combustível suficiente o retorno é true, caso não tenha será false
    let proximaFase = passagemFase(naveVanguarda, combustivelNecessario);

    if(proximaFase){
      // Retona para a próxima fase 
      return 'Fase 2';
    } else {
      // Fim de jogo
      return '';
    }
  }
  // Caso Vanguarda tenha perdido
  console.log('Game Over')
  return '';
}