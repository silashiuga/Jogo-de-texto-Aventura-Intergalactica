const pergunta = require('./pergunta');

module.exports = (naveVanguarda) => {

  // Oferta de escudo
  let textoProdutoEscudo = 'Temos 800 pontos de escudo, por 1600 soláris. Deseja comprar: "S" - sim ou "N" - não: ';

  // Valida resposta
  let respostaEscudo = pergunta(textoProdutoEscudo, 'pergunta');

  // Caso compre o escudo
  if(respostaEscudo == 'S'){

    // Verifica se tem dinheiro
    let temDinheiroEscudo = naveVanguarda.validarSaque(500);

    // Caso tenha
    if(temDinheiroEscudo){

      // Subtrair valor da compra
      naveVanguarda.sacarCofre(1600);

      // Adicionar pontos ao escudo
      naveVanguarda.adicionarEscudo(800);

      console.log();
      console.log('Foram adicionados 800 pontos de escudo');
      naveVanguarda.statusNave();
    }
  }
  console.log();
  console.log(`O capitão ${naveVanguarda.nomeCapitao}, perguntou se tinha mais produtos.`);
  console.log();

  // Oferta de dano do canhão
  let textoProdutoCanhao = 'Sim, temos 300 pontos de canhão, por 700 soláris. Deseja comprar: "S" - sim ou "N" - não: ';

  // Valida resposta
  let respostaCanhao = pergunta(textoProdutoCanhao, 'pergunta');

  // Caso compre o dano
  if(respostaCanhao == 'S'){

    // Verifica se tem dinheiro
    let temDinheiro = naveVanguarda.validarSaque(700);

    // Caso tenha
    if(temDinheiro){

      // Subtrair valor da compra
      naveVanguarda.sacarCofre(700);

      // Adicionar pontos ao canhão
      naveVanguarda.adicionarDanoCanhao(300);
      console.log();
      console.log('Foram adicionados 300 de dano no canhão');
      naveVanguarda.statusNave();
    }
  }
  console.log();
  console.log(`Novamente, o capitão perguntou se tinha mais algum outro produto.`);
  console.log();

  // Oferta combustível
  let textoProdutoCombustivel = 'Sim, temos 50 toneladas de combustível, por 700 soláris. Deseja comprar: "S" - sim ou "N" - não: ';

   // Valida resposta
  let respostaCombustivel = pergunta(textoProdutoCombustivel, 'pergunta');

  // Caso compre o combustível
  if(respostaCombustivel == 'S'){

    // Verifica se tem dinheiro
    let temDinheiro = naveVanguarda.validarSaque(700);

    // Caso tenha
    if(temDinheiro){

      // Subtrair valor da compra
      naveVanguarda.sacarCofre(700);

      // Adicionar o combustível comprado
      naveVanguarda.adicionarCombustivel(50);
      console.log();
      console.log('Foram adicionadas 50 toneladas de combustível.');
      naveVanguarda.statusNave();
    }
  }
  
  console.log();
  console.log('Após ficarem ali por algum tempo, acabaram saindo da estação.');
  console.log();
}