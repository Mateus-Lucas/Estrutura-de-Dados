// 05 - Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array
// com os números de Fibonacci. Exiba o resultado usando o método join.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFibonacci(n) {
    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

rl.question('Digite um inteiro positivo: ', (numero) => {
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, digite um inteiro positivo válido.");
    } else {
        const fibonacci = calcularFibonacci(numero);
        console.log(`Os ${numero} primeiros números de Fibonacci são: ${fibonacci.join(', ')}`);
    }

    rl.close();
});

