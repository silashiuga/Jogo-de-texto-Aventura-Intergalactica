const prompt = require('prompt-sync')();

// Função para validação da resposta
function validaDados(valor, tipo){

  // Se o valor de entrada for nulo
  if(!valor){
    console.error('Por favor informe uma resposta.');
    return true;
  }

  // Valida a resposta de um pergunta
  if(tipo == 'pergunta'){

    // Se o valor for diferente da resposta padrão
    if(valor != 'S' && valor != 'N'){
      console.error('Por favor informe uma resposta válida.');
      return true;
    } 
  }

  // Caso a resposta seja válida
  return false;
}

module.exports = (texto, tipo) => {

   // Variável para validar resposta do jogador.
   let validaResposta = true;

   // Variável para armazenar a resposta.
   let resposta;

   // Loop para validar resposta
   while(validaResposta){

     resposta = prompt(`${texto}`);

      if(tipo == 'pergunta'){
        
        // Transforma a resposta em maiúsculo
        resposta = resposta.toUpperCase();
      }
     
     // Executa o método de validação, retornando true se a resposta for inválida.
     // Ou false de for válida.
     validaResposta = validaDados(resposta, tipo);
   }

   return resposta;
}