function calcularTemperatura() {
  let temperatura_celsius = prompt("Informe a temperatura em Celsius:")
  let temperatura_farenheit = temperatura_celsius * 1.8 + 32
  if (isNaN(temperatura_celsius))
  {
    alert("O argumento é inválido. Experimente digitar um número.")
  }
  else
  {
    alert("A temperatura em Farenheit é " + temperatura_farenheit)
  }
}