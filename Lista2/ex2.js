// 02 - Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. 
// Crie sua própria função para isso.


function ordernarValores(n1, n2, n3) {

    let numeros = [n1, n2, n3]

    if (n2 > n1 && n1 > n3) {
        numeros = [n3, n1, n2]
    } else if (n1 > n3 && n3 > n2) {
        numeros = [n2, n3, n1]
    } else if (n2 > n3 && n3 > n1) {
        numeros = [n1, n3, n2]
    } else if (n3 > n1 && n1 > n2) {
        numeros = [n2, n1, n3]
    } else if (n1 > n2 && n2 > n3) {
        numeros = [n3, n2, n1]
    }

    return numeros
}

var resultado = ordernarValores(1, 2, 3) 
console.log(resultado);

var resultado = ordernarValores(1, 3, 2) 
console.log(resultado);

var resultado = ordernarValores(2, 1, 3) 
console.log(resultado);

var resultado = ordernarValores(2, 3, 1) 
console.log(resultado);

var resultado = ordernarValores(3, 1, 2) 
console.log(resultado);

var resultado = ordernarValores(3, 2, 1) 
console.log(resultado);

