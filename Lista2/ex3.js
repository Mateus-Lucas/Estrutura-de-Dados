// 03 -  Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o número 1? ', (n1) => {
  rl.question('Qual o número 2? ', (n2) => {
    rl.question('Qual o número 3? ', (n3) => {
      let numeros = [n1, n2, n3]
      const ordemDescrescente =  numeros.sort((a, b) => b - a)
      console.log(ordemDescrescente);
      rl.close();
    }); 
  });
});
