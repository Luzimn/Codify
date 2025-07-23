
const { dicionario, codificar } = require('./test');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const senhaC = "abc";
const nomeC = "lucas";


function acesso(nome, senha) {
    if (nome === nomeC && senha === senhaC) {
        return true;
    } else {
        return false;
    }
}


function DeuCerto(acessoResultado, nome, senha) {
    if (acessoResultado === true) {
        const nomeCodificado = codificar(nome, dicionario);
        const senhaCodificado = codificar(senha, dicionario);
        return `Acesso autorizado. Nome codificado: ${nomeCodificado} senha codificada: ${senhaCodificado}`;
    } else {
        return "Acesso negado.";
    }
}



rl.question("Digite seu nome: ", (respostaNome) => {
  rl.question("Digite sua senha: ", (respostaSenha) => {
    const resultado = acesso(respostaNome, respostaSenha);
    const mensagem = DeuCerto(resultado, respostaNome, respostaSenha);
    console.log(mensagem);
    rl.close();
  });
});

