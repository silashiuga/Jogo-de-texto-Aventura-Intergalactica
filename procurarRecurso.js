module.exports = () => {
  // Gera um valor aleatório entre 0 à 10
  let valorAleatorio = Math.floor(Math.random() * 11);

  // Se o valor for par, então foi encontrado e o retorno é true.
  if(valorAleatorio % 2 == 0){
    return true;
  } else {
    // Se for impar, não foi encontrado alguma peça e o retorno será false
    return false;
  }
}