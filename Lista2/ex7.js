// 07 - Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz,
// inicialize todos os elementos de 1 até 'linha x coluna'. Para preencher cada elemento use a
// soma dos seus índices.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function criarMatriz(linhas, colunas) {
    let matriz = [];
    let contador = 1;
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(contador);
            contador++;
        }
        matriz.push(linha);
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

rl.question("Digite o número de linhas: ", function(linhas) {
    rl.question("Digite o número de colunas: ", function(colunas) {
        let matriz = criarMatriz(parseInt(linhas), parseInt(colunas));
        imprimirMatriz(matriz);
        rl.close();
    });
});
