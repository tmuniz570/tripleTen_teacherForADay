// Criando o array (equivalente à lista) chamado MOCHILA
const MOCHILA = ["lápis", "caderno", "caneta"];

// Imprimindo o item no "bolso" de índice 0
console.log(MOCHILA[0]); // Saída: lápis
console.log(MOCHILA);


MOCHILA.splice(1, 1); // Remove 1 elemento a partir do índice 1 ("caderno")
console.log(MOCHILA);   // Saída: ['lápis', 'caneta', 'borracha']

const MOCHILA2 = ["lápis", "caderno", "caneta", "borracha"];
MOCHILA2.splice(0, 2); // Remove 2 elementos a partir do índice 0 ("lápis", "caderno")
console.log(MOCHILA2);  // Saída: ['caneta', 'borracha']

const ultimoItem = MOCHILA2.pop(); // Remove e retorna o ultimo item, nao aceita parametro como no python
console.log(ultimoItem)
console.log(MOCHILA2);