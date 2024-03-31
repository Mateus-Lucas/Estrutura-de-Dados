// 08 - Faça uma função para converter um número decimal em hexadecimal.

function decimalParaHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase();
}

let numeroDecimal = 255;
let numeroHexadecimal = decimalParaHexadecimal(numeroDecimal);
console.log(`O número ${numeroDecimal} em hexadecimal é: ${numeroHexadecimal}`);
