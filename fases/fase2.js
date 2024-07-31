const combate = require('../combate');
const pergunta = require('../pergunta');
const loja = require('../loja');
const passagemFase = require('../passagemFase');
const eventoMeteoros = require('../eventoMeteoros');

module.exports = (naveVanguarda) => {

  console.log('--------- Galáxia Andrômeda ---------');
  console.log();
  // Pedido de ajuda dos Zenits
  console.log('Chegando na Gálaxia Andrômeda, uma nova mensagem foi captada. No entanto, o rementente era familiar.');
  console.log(`Quando o capitão ${naveVanguarda.nomeCapitao} visualizou a mensagem. Viu que se tratava de um pedido de socorro do planeta Zenit.`);
  console.log('Os Zenits são uma civilização bastante amigáveis com os seres humanos, e a anos, há uma troca de conhecimentos de tecnologia e agricultura entre eles.');
  console.log('O planeta Zenit estava prestes a ser atacado por uma nave Ragnor.');
  console.log();
  console.log(`${naveVanguarda.nomeCapitao} se reuniu com os oficiais para discutirem sobre o assunto.`);
  console.log('Se diante da situação em que estavam passando, poderiam ajudar.');
  console.log();

  // Chama a função pergunta, para verificar se o jogador deseja ajudar
  let textoPergunta =  'Deseja ir a Zenit e enfrentar o inimigo? S - sim ou N - não: ';
  let resposta1 = pergunta(textoPergunta, 'pergunta');

  // Se a resposta da ajuda for sim
  if(resposta1 == 'S'){
    console.log(`Quando terminaram a reunião, o capitão ${naveVanguarda.nomeCapitao} concluiu que iria ajudar.`);
    console.log('Pois os Zenits não eram fortes no setor militar. Dessa forma, eles tinham sérios problemas com a ameaça Ragnor');
    console.log();
    console.log('Ao se aproximarem do planeta, avistaram a nave inimiga, e parecia ser maior que a última.');
    console.log(`O capitão ${naveVanguarda.nomeCapitao} entrou em contato com a nave, alertando que deixasse o planeta em paz.`)
    console.log('Mas o comandante Ragnor afimou que não recuariam, e desafiou Vanguarda para uma luta.');
    console.log();
    console.log('O combate se inicia.');

    // Chama a função de combate
    let resultadoCombate = combate(naveVanguarda,2);

    // Caso Vanguarda vence
    if(resultadoCombate){
      console.log('Parabéns, Vanguarda recebeu pontos de melhorias!');

       // Nave recebe uma melhoria de bônus.
      naveVanguarda.receberBonus(100, 200, 30, 10, 1000);

      // Exibe o novo status da nave, adição de recursos
      naveVanguarda.statusNave();
      console.log();
      console.log('Infelizmente, ao destruirem a nave Ragnor, não sobrou nada.');
      console.log();
      console.log('O povo Zenit ficou extremente feliz por estarem livres dos piratas.');
      console.log('E como forma de gratidão, insitiram em entregar alguns recursos como presente.');
      console.log();

      // Adiciona energia e combustível
      naveVanguarda.adicionarEnergia(50);
      naveVanguarda.adicionarCombustivel(90); 
      
      // Exibe o novo status da nave
      console.log('Foram adicionados 50 pontos de energia e 90 toneladas de combustível');
      naveVanguarda.statusNave();
      console.log();

      // Descoberta de um atalho direto para Centaurus
      console.log('O líder de Zenit veio entrar em contato com o capitão para agradecer, e perguntou o que estava fazendo na Galáxia Andrômeda.');
      console.log(`${naveVanguarda.nomeCapitao} disse que estava em uma missão para salvar a Terra, e era necessário chegar na Galáxia de Centaurus.`); 
      console.log('Mas antes, tinha que passar pela Galáxia do Cometa para chegar ao destino.');
      console.log();
      console.log('Assim que o lider ouvi isso, afirmou que não era preciso todo esse trajeto, pois havia um túnel espacial que levava direto a Centaurus.');
      console.log('O capitão recebeu as coordenas do túnel e saiu do planeta.');

      console.log();
      console.log(`${naveVanguarda.nomeCapitao} tinha um pressentimento de que seu conflito com os Piratas Ragnor não tinha acabado.`);
      console.log('No caminho das novas coordendas, a tripulação avistou uma estação de mercadorias, e perguntou ao capitão se deveriam ir lá.');
      console.log();

      // Chama a função de pergunta, para verificar se o jogador deseja acessar a estação  
      let textoPergunta2 = ' Deseja ir a estação de mercadorias? S - sim ou N - não: ';
      let resposta2 = pergunta(textoPergunta2, 'pergunta')

      // Caso desejar
      if(resposta2 == 'S'){
        console.log();
        console.log(`O capitão decidiu ir a estação.`);
        naveVanguarda.statusNave();
        console.log(`Chegando ao comércio, um alienígena da Gálaxia de Andrômeda veio em direção a tripução trazendo as ofertas.`);

        // Chama a função de loja, possibilitando que o jogador compre alguma melhoria
        loja(naveVanguarda);
      }
      
      console.log('Então partiram dali em direção ao tunel que leva para a Galáxia Centaurus.');

      // combustível necessário para acessar a fase final
      const combustivelCentauro = 200;
      
      // Se há combustível o suficiente, o retorno é true, caso não tenha será false
      let faseFinal = passagemFase(naveVanguarda, combustivelCentauro);

      if(faseFinal){

        // Retona para a próxima fase 
        return 'Fase Final';
      } else {

        // Fim de jogo
        return '';
      }
    } else {
      // Se Vanguarda perdeu na batalha
      console.log('Game Over');
      return '';
    }
  } else {
    // Jogador decide não ir a Zenit
    console.log();
    console.log(`Ao finalizarem a reunião, o capitão ${naveVanguarda.nomeCapitao} concluiu que, ir a Zenit era um risco muito grande quando a vida na Terra estava em jogo.`);
    console.log();
    console.log('Então contiuaram o rumo.');
    console.log();
    console.log('Algumas horas depois, os cientistas alertaram sobre uma possível chuva de meteoros que estava indo em direção a nave.');
    console.log('A equipe de navegação confirmou este evento, e pela velocidade em que Vanguarda estava, já não tinha como desviar.');

    // Chama função do evento de chuva de meteoros
    let naveDestruida = eventoMeteoros(naveVanguarda);

    if(naveDestruida){
      // Se Vanguarda foi detruída na chuva de meteoros
      console.log('Nave destruída por meteoros.');
      console.log();
      console.log('Game Over');
      return '';
    }

    console.log();
    console.log('Passado a chuva de meteoros, a tripulação viu um baú isolado perto do local onde a nave estava.');
    console.log(`Perguntaram ao capitão ${naveVanguarda.nomeCapitao} se poderiam pega-lo.`);
    console.log();
    
    // Se o jogador desejar verificar o baú
    let textoPergunta = 'Deseja pegar o baú no espaço? "S" - sim ou "N" - não: ';
    let resposta = pergunta(textoPergunta, 'pergunta')

    if(resposta == 'S'){
      console.log();
      console.log('O capitão concordou.');
      console.log('Ao abrirem o baú encontraram 1000 soláris.');
      console.log();
      console.log('1000 soláris adicionado.');
      // Será adicionado 1000 de dinheiro
      naveVanguarda.depositarCofre(1000);
      naveVanguarda.statusNave();
    } else {
      console.log();
      console.log('O capitão achou melhor não pegar o baú.');
    }

    // Quantidade de combustível necessário para ir ao próximo planeta.
    const combustivelCometa = 50;

    console.log();
    console.log('Em seguida partiram para o túnel espacial que leva para a Galáxia do Cometa.');

    // Chama a função que verificará se há combustível.
    let proximaFase = passagemFase(naveVanguarda, combustivelCometa);

    if(proximaFase){
        
      // Retona para a próxima fase 
      return 'Fase 3';
    } else {

      // Fim de jogo
      return '';
    }
 
  }
}