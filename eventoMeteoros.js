const prompt = require('prompt-sync')();

// Retorna um valor de colisão
function valorColisao(){
  let danoMaximo = 10;
  let danoMinimo = 5;
  // Gera um valor aleatório, representando o dano do meteoro na colisão
  let valorAleatorio = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
  return valorAleatorio;
}

module.exports = (naveVanguarda) => {
  console.log();
  console.log('================== CHUVA DE METEOROS ================== ');
  console.log();

  // Verfica se a nave foi destruída
  let naveDestruida = false;

  // Quantidade máxima e minima de meteoros
  let maxMeteoros = 5;
  let minMeteoros = 3;

  // Gera um valor aletório que representa a quantidade de meotoros 
  let quantidadeColisao = Math.floor(Math.random() * (maxMeteoros - minMeteoros + 1) + minMeteoros);

  let impactoColisao = 0;

  for(let i = 1; i <= quantidadeColisao; i++){

    // Gera o valor do impacto
    impactoColisao = valorColisao()

    // Defesa da nave
    naveVanguarda.defender(impactoColisao);

    console.log();
    console.log(` === Colisão com a nave: ${impactoColisao} de dano === `);

    // Exibe o status da nave para este evento
    naveVanguarda.statusNaveMeteoros();

    // Verifica se a nave foi destruído
    if(naveVanguarda.energia == 0 || naveVanguarda.escudo <= 0){
      naveDestruida = true;
      break;
    }

    // Próxima iteração
    prompt('Digite enter para continuar');
  }
  return naveDestruida;
}