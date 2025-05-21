console.log("--- Arrays em JavaScript ---");
// Criando um array
const frutas = ["maçã", "banana", "laranja"];
console.log(`Array de frutas: ${frutas}`);

// Acessando elementos (indexação)
console.log(`Primeira fruta: ${frutas[0]}`);
console.log(`Última fruta: ${frutas[frutas.length - 1]}`);

// Modificando elementos
frutas[1] = "morango";
console.log(`Array modificado: ${frutas}`);

// Adicionando elementos
frutas.push("kiwi");
console.log(`Array com kiwi: ${frutas}`);

console.log("\n--- Objetos em JavaScript ---");
// Criando um objeto
const pessoa = { nome: "Carlos", idade: 32, cidade: "Liverpool" };
console.log(`Objeto pessoa: ${pessoa}`);

// Acessando valores por chave
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa["idade"]}`);

// Modificando valores
pessoa.idade = 33;
console.log(`Idade atualizada: ${pessoa.idade}`);

// Adicionando um novo par chave-valor
pessoa.profissão = "Engenheiro";
console.log(`Objeto com profissão: ${pessoa.profissão}`); //usar acentos e uma pessima pratica, mas funciona!

console.log("\n--- Sets em JavaScript (ES6) ---");
// Criando um Set
const numeros = new Set([1, 2, 2, 3, 4, 4, 5]); // Duplicatas são removidas
console.log(`Set de números: ${[...numeros]}`); // Convertendo para array para melhor visualização

// Adicionando um elemento
numeros.add(6);
console.log(`Set com 6: ${[...numeros]}`);

// Verificando a presença de um valor
console.log(`O número 3 está no Set? ${numeros.has(3)}`);

console.log("\n--- Maps em JavaScript (ES6) ---");
// Criando um Map
const mapaPessoa = new Map([
    ["nome", "Ana"],
    ["idade", 28],
    ["cidade", "Manchester"]
]);
console.log(`Map pessoa: ${[...mapaPessoa]}`); // Convertendo para array de arrays para visualização

// Obtendo valores por chave
console.log(`Nome no Map: ${mapaPessoa.get("nome")}`);

// Adicionando um novo par chave-valor
mapaPessoa.set("profissão", "Designer");
console.log(`Map com profissão: ${[...mapaPessoa]}`);