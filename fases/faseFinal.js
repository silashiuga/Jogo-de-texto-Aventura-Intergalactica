const combate = require('../combate');

module.exports = (naveVanguarda) => {

  // Encontro do chefão com a nave
  console.log('--------- Galáxia Centaurus ---------');
  console.log();
  console.log('Finalmente chegamos a Galáxia Centaurus, agora só ir ao planeta Astra e coletar o Vortex, pensou o capitão.');
  console.log('Quando estava próximo a Astra, uma super nave Ragnor surgiu na frente de Vanguarda.');
  console.log('O comandante Ragnor advertiu que destruiria Vanguarda, pelo prejuízo que ela tinha feito em combate.');
  console.log();
  console.log('Então a luta se iniciou.')

  // Combate Final
  let resultado = combate(naveVanguarda, 3);

  // Caso Vanguarda venceu
  if(resultado){
    console.log('Parabéns, Vanguarda venceu!');
    naveVanguarda.receberBonus(1000, 1000, 1000, 1000, 1000); 

    console.log();
    console.log('A missão foi um sucesso, Vanguarda foi a Astra e coletou o Vortex.');
    console.log('A viagem para casa foi mais tranquila, sem os Ragnors incomodando.');
    console.log('Ao retornarem a Terra o reator foi construído, filtrando grandes quantidades de água poluída em água potável.');

    console.log();
    console.log('Jogo desenvolvido por Silas Hiuga.');
    console.log('Obrigado por jogar.')
  } else {
    // Caso Vanguarda perdeu
    console.log();
    console.log('Game Over');
  }
}