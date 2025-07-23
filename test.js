const dicionario =   {  "a": "m", "b": "x", "c": "a", "d": "e", "e": "g", "f": "b", "g": "q",
  "h": "d", "i": "c", "j": "y", "k": "l", "l": "h", "m": "j", "n": "s",
  "o": "n", "p": "z", "q": "u", "r": "v", "s": "i", "t": "o", "u": "p",
  "v": "r", "w": "w", "x": "f", "y": "k", "z": "t"};
console.log(dicionario);

/*const readline = require('readline');

const palavra = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/

/*console.log("/////////////////////////////////////");

console.log("///////////////////////////////////////////////");*/

function codificar(palavra, dicionario) {
  let resultado = "";
  for (let letra of palavra.toLowerCase()) {
    resultado += dicionario[letra] || letra;
  }
  return resultado;
}

/*palavra.question("Insira o valor de A: ", (input) => {
  console.log("/////////////////////////////////////");
  const resultado = codificar(input, dicionario);
  console.log("Resultado codificado:", resultado);
  console.log("/////////////////////////////////////");
  palavra.close();
});*/

module.exports = {
  dicionario,
  codificar
};