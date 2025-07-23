const dicionario =   {  "m": "a", "x": "b", "a": "c", "e": "d", "g": "e", "b": "f", "q": "g",
  "d": "h", "c": "i", "y": "j", "l": "k", "h": "l", "j": "m", "s": "n",
  "n": "o", "z": "p", "u": "q", "v": "r", "i": "s", "o": "t", "p": "u",
  "r": "v", "w": "w", "f": "x", "k": "y", "t": "z"};
console.log(dicionario);

const readline = require('readline');

const palavra = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("/////////////////////////////////////");


console.log("///////////////////////////////////////////////");

function codificar(palavra, dicionario) {
  let resultado = "";
  for (let letra of palavra.toLowerCase()) {
    resultado += dicionario[letra] || letra;
  }
  return resultado;
}

palavra.question("Insira o valor de A: ", (input) => {
  console.log("/////////////////////////////////////");
  const resultado = codificar(input, dicionario);
  console.log("Resultado codificado:", resultado);
  console.log("/////////////////////////////////////");
  palavra.close();
});