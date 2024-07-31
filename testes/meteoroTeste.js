const eventoMeteoros = require('../eventoMeteoros');
const Vanguarda = require('../naves/naveVanguarda');

  let energiaHeroi = 14;
  let escudoHeroi = 20;
  let canhaoHeroi = 100;
  let combustivelHeroi = 100;
  let dinheiroHeroi = 100

  const naveVanguarda = new Vanguarda( 
    energiaHeroi,
    escudoHeroi, 
    canhaoHeroi,
    combustivelHeroi,
    dinheiroHeroi, 
   'teste' 
  );

  let destruido = eventoMeteoros(naveVanguarda);

  if(destruido){
    console.log('Vanguarda destruída')
  }
  