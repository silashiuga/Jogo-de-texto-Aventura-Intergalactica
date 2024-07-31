const prompt = require('prompt-sync')();
const Vanguarda = require('../naves/naveVanguarda');
const combateTeste = require('../combate');

console.log('Teste de combate');

function combate(energiaHeroi, escudoHeroi, canhaoHeroi, combustivelHeroi, dinheiroHeroi, nivel){
  console.log(` ======== Combate nível ${nivel} ======== `);
  

  const naveVanguarda = new Vanguarda( 
    energiaHeroi,
    escudoHeroi, 
    canhaoHeroi,
    combustivelHeroi,
    dinheiroHeroi );
    combateTeste(naveVanguarda , nivel);

}

// Vilão nível 3
combate(475, 1151, 251, 100, 0 , 3);

// vilão nível 2
combate(500, 400, 100, 100, 0 , 2);

// Vilão nível 1
combate(10, 200, 70, 100, 0 , 1);