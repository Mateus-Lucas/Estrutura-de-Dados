// 09 - Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
// acordo com as regras a seguir:
// a. Se o número for par, empilhe na pilha;
// b. Se o número for ímpar, desempilhe um número da pilha. Caso a pilha esteja vazia,
// mostre uma mensagem;
// c. Se ao final do programa a pilha não estiver vazia, desempilhe todos os elementos,
// imprimindo-os na tela.

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "underflow";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items.toString();
    }
}

function verificarNumeros(numeros) {
    let pilha = new Stack();

    for (let numero of numeros) {
        if (numero % 2 === 0) {
            pilha.push(numero);
        } else {
            let desempilhado = pilha.pop();
            if (desempilhado === "underflow") {
                console.log("A pilha está vazia.");
            } else {
                console.log(`Desempilhado: ${desempilhado}`);
            }
        }
    }

    // Desempilhar todos os elementos restantes
    console.log("Elementos restantes na pilha:");
    while (!pilha.isEmpty()) {
        console.log(pilha.pop());
    }
}

// Teste do programa
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.question("Digite 10 números separados por espaço: ", function(input) {
    numeros = input.split(" ").map(Number);
    verificarNumeros(numeros);
    rl.close();
});
         