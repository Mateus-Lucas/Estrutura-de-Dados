// 01 - Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. 
// Não use o método sort.

let numeros = [155, 84]

if (numeros[0] > numeros[1]) {
    numeros = [numeros[1], numeros[0]]
}

console.log(numeros);

