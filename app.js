/*var valorA = readline("insira o valor do A:");
let valorB = readline("insira o valor do B:");
let valorC = readline("insira o valor do C:");

function resultado(valorA, valorB, valorC) {
    var primeiroP = valorA*2 + valorB + valorC;
    if (primeiroP > 0) {
        console.log("o resultado é: " + primeiroP);
    }
    else 
        console.log("o resultado invalido")
}

console.log(resultado);*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function resultado(valorA, valorB, valorC) {
  const primeiroP = valorA * 2 + valorB + valorC;

  if (primeiroP > 0) {
    console.log("O resultado é: " + primeiroP);
  } else {
    console.log("Resultado inválido");
  }
}


rl.question("Insira o valor de A: ", (inputA) => {
  rl.question("Insira o valor de B: ", (inputB) => {
    rl.question("Insira o valor de C: ", (inputC) => {
      
      const valorA = parseFloat(inputA);
      const valorB = parseFloat(inputB);
      const valorC = parseFloat(inputC);

      
      resultado(valorA, valorB, valorC);

      rl.close();
    });
  });
});
