const procurarRecurso = require('../procurarRecurso');
const loja = require('../loja');
const pergunta = require('../pergunta');
const passagemFase = require('../passagemFase');

module.exports = (naveVanguarda) => {

  console.log();
  console.log('--------- Galáxia do Cometa ---------');
  console.log();
  console.log(`Com alguns dias de viagem na Galáxia do Cometa, o Capitão ${naveVanguarda.nomeCapitao} reparou que uma estação de mercadorias estava perto.`);

  console.log();
  // Chama a função de pergunta, para verificar se o jogador deseja acessar a estação  
  let textoPergunta1 = ' Deseja ir a estação de mercadorias? S - sim ou N - não: ';
  let resposta1 = pergunta(textoPergunta1, 'pergunta');

  // Caso desejar ir a estação
  if(resposta1 == 'S'){
    console.log();
    console.log(`O capitão decidiu ir a estação.`);
    naveVanguarda.statusNave();
    console.log(`Chegando ao comércio, um alienígena da Via Láctea veio em direção a tripução trazendo as ofertas.`);

    // Chama a função de loja, possibilitando que o jogador compre alguma melhoria
    loja(naveVanguarda);
  } else {
    console.log('O capitão decidiu seguir viagem.')
  }
  console.log();
  console.log('Partindo dali, os cientistas afirmaram ter encontrado um planeta recém catalogado, que não foi explorado.');
  console.log(`Sendo assim, eles perguntaram ao capitão ${naveVanguarda.nomeCapitao} se poderiam explorar. De repente, até encontrariam algum recurso útil.`);

  // Chama a função de pergunta, para verificar se o jogador deseja explorar o planeta 
   let textoPergunta2 = ' Deseja ir a ao planeta desconhecido S - sim ou N - não: ';
   let resposta2 = pergunta(textoPergunta2, 'pergunta');

  // Se deseja explorar o planeta
  if(resposta2 == 'S'){
    console.log();
    console.log(`${naveVanguarda.nomeCapitao} achou ser um boa ideia, uma vez que o planeta estaria no caminho da rota.`);
    console.log(`Chegando ao planeta, uma equipe de exploradores foram enviados.`); 
    console.log();

    // Chama a função para simular se o recurso foi encontrado. True - Sim, False - Não
    let exploracao1 = procurarRecurso();

    // Adiciona energia
    if(exploracao1){
      console.log(`Foram encontrados recursos que darão mais energia.`);
      console.log('Adcionados 100 pontos de energia.');
      naveVanguarda.adicionarEnergia(100);
      naveVanguarda.statusNave();
    }

    let exploracao2 = procurarRecurso();

    // Adiciona escudo
    if(exploracao2){
      console.log(`Foram encontrados recursos que darão mais escudo.`);
      console.log('Adicionados 100 pontos de escudo.')
      naveVanguarda.adicionarEscudo(100);
      naveVanguarda.statusNave();
    }

    let exploracao3 = procurarRecurso();

    // Adiciona dano canhão
    if(exploracao3){
      console.log(`Foram encontrados recursos que aumentarão o poder de fogo do canhão.`);
      console.log('Adicionados 100 pontos de dano máximo no canhão.')
      naveVanguarda.adicionarDanoCanhao(100);
      naveVanguarda.statusNave();
    }

    if(exploracao1 || exploracao2 || exploracao3){
      console.log(`Ao ver o ganho que os exploradores trouxeram para a nave, o capitão pensou: "Por que não tinha vindo aqui antes".`)
    } else {
      console.log('Ao retornarem para a nave, os exploradores infelizemente não encotraram recursos que ajudariam a viagem.')
    }
    
  } else {
    // Não explorou o planeta
    console.log();
    console.log('O capitão decidiu seguir viagem.')
  }

  console.log('Então partiram dali e seguiram rumo ao túnel que leva a Galáxia Centaurus.');

  // Quantidade de combustível necessário para passar para próxima fasee
  let combustivelFaseFinal = 30;

  // Chama a função que verifica se a nave possui a quantidade, retorna true se tiver e false se não tiver.
  let proximaFase = passagemFase(naveVanguarda,combustivelFaseFinal);
  if(proximaFase){
    return 'Fase Final';
  } else {
    return '';
  }
}