// 06 - Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = '
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFatorial(n) {
    if (n === 0) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

rl.question('Digite um inteiro positivo: ', (numero) => {
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, digite um inteiro positivo válido.");
    } else {
        const fatorial = calcularFatorial(numero);
        console.log(`Fatorial de ${numero}: ${numero}! = ${fatorial}`);
    }

    rl.close();
});
