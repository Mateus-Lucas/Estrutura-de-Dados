// 10 - Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
// acordo com as regras a seguir:
// a. Se o número for par, empilhe na pilha chamada par;
// b. Se o número for ímpar, empilhe na pilha chamada impar;
// c. Se o número for zero (0), desempilhe um elemento de cada pilha. Caso alguma pilha
// esteja vazia, mostre uma mensagem de erro na tela.
// d. Ao final do programa desempilhe todos os elementos das duas pilhas, imprimindo-os na
// tela

class Pilha {
    constructor() {
        this.itens = [];
    }

    // Método para empilhar um elemento
    empilhar(elemento) {
        this.itens.push(elemento);
    }

    // Método para desempilhar um elemento
    desempilhar() {
        if (this.estaVazia()) {
            return "Erro: Pilha vazia";
        }
        return this.itens.pop();
    }

    // Método para verificar se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }
}

// Função principal
function main() {
    const pilhaPar = new Pilha();
    const pilhaImpar = new Pilha();

    for (let i = 0; i < 10; i++) {
        const numero = [7, 4, 0, 9, 2, 0, 6, 1, 0, 3];
        
        if (numero % 2 === 0) {
            pilhaPar.empilhar(numero);
        } else {
            pilhaImpar.empilhar(numero);
        }

        if (numero === 0) {
            const desempilhadoPar = pilhaPar.desempilhar();
            const desempilhadoImpar = pilhaImpar.desempilhar();
            if (desempilhadoPar === "Erro: Pilha vazia" || desempilhadoImpar === "Erro: Pilha vazia") {
                console.log("Erro: Alguma pilha está vazia");
            } else {
                console.log("Desempilhado Par:", desempilhadoPar);
                console.log("Desempilhado Ímpar:", desempilhadoImpar);
            }
        }
    }

    console.log("Elementos desempilhados da pilha Par:");
    while (!pilhaPar.estaVazia()) {
        console.log(pilhaPar.desempilhar());
    }

    console.log("Elementos desempilhados da pilha Ímpar:");
    while (!pilhaImpar.estaVazia()) {
        console.log(pilhaImpar.desempilhar());
    }
}

// Chamando a função principal
main();
