// 04 - Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde
// esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o
// número aparece (como nos métodos indexOf e lastIndexOf).

function encontrarIndices(vetor, numero) {
    const indices = [];
    
    // Looping para montar vetor onde o número aparece
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }   
    }
    
    if (indices.length > 0) {
        console.log(`O número ${numero} aparece nos índices: ${indices.join(', ')}`);
    } else {
        console.log(`O número ${numero} não foi encontrado no vetor.`);
    }
}

const vetor = [1, 3, 5, 3, 7, 3, 9];
const numero = 8;
encontrarIndices(vetor, numero);


