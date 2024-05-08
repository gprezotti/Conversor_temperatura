function numero() {
  let numero_aleatorio = Number(Math.floor(Math.random() * 11))
  let numero_informado = Number(prompt("Digite o número informado"))
  
  if (numero_informado == numero_aleatorio) {
    alert("Você acertou o número. Parabéns!!")
  }
  else
  {
    alert("Você errou o número. O número informado foi " + numero_aleatorio)
  }
}