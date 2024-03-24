function Aluno(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

Aluno.prototype.printNome = function () {
    console.log(this.nome);
};

var aluno = new Aluno('Mateus Lucas', 20, 84.5);

console.log("Nome antes da alteração: " + aluno.nome);
console.log("Idade antes da alteração: " + aluno.idade);
console.log("Peso antes da alteração: " + aluno.peso);

aluno.nome = "João";
aluno.idade = 25;
aluno.peso = 75.3;

console.log("\nNome após a alteração: " + aluno.nome);
console.log("Idade após a alteração: " + aluno.idade);
console.log("Peso após a alteração: " + aluno.peso);


