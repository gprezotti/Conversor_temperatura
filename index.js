function numero() {
  let numero_aleatorio = Number(Math.floor(Math.random() * 11))
  let numero_informado = Number(prompt("Informe um número entre 0 e 10:"))
  
  if (numero_informado == numero_aleatorio) {
    alert("Você acertou o número. Parabéns!!")
  }
  else if ((numero_informado - numero_aleatorio == 1) || (numero_aleatorio - numero_informado == 1)) {
    alert("Continue tentando, Você errou por um número! O número sorteado foi " + numero_aleatorio)
  }
  else
  {
    alert("Você errou o número. O número sorteado foi " + numero_aleatorio)
  }
}