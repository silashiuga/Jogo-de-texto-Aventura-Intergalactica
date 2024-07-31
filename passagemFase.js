
module.exports = (naveVanguarda, combustivelNecessario) => {
  console.log();
  console.log(`Para atravessar o tunel, Vanguarda consome ${combustivelNecessario} toneladas de combustível.`);

  // Executa a função que verifica e subtrai o combustível se houver a quantidade necessária
  let possuiCombustivel = naveVanguarda.consumoCombustivel(combustivelNecessario);

  //Caso tenha a quantidade
  if(possuiCombustivel){
    console.log('Felizmente ele tem essa quantidade.');
    console.log();
    console.log(`Foram consumidos ${combustivelNecessario} toneladas.`);
    naveVanguarda.statusNave();
    console.log();
    return true;
  } else {
    // Caso não tenha será fim de jogo
    console.log('Infelizmente ela não tem essa quantidade.');
    console.log('Game Over');
    console.log();
    return false;
  }
}