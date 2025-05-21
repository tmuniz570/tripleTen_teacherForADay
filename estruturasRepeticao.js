console.log("--- Estrutura de Repetição for em JavaScript (Clássico) ---");
// Iterando com um contador
for (let i = 0; i <= 4; i++) {
    console.log(`Índice: ${i}`);
}

console.log("\n--- Estrutura de Repetição for...of em JavaScript ---");
// Iterando sobre um array (iterável)
const cores = ["vermelho", "verde", "azul"];
for (const cor of cores) {
    console.log(`Cor: ${cor}`);
}

console.log("\n--- Estrutura de Repetição while em JavaScript ---");
let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}
console.log("\n--- Estrutura de Repetição do...while em JavaScript ---");
let contadorDoWhile = 0;
do {
    console.log(`Contador do...while: ${contadorDoWhile}`);
    contadorDoWhile++;
}while (contadorDoWhile < 0);

console.log("\n--- Estrutura de Repetição forEach em JavaScript ---");
// Iterando sobre um array com forEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, index) => {
    console.log(`Index: ${index}, Número: ${numero}`);
});

console.log("\n--- Simulando range com Array.from em JavaScript ---");
// Simulando um "range" usando Array.from e um map function
const rangeSimulado = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(`Range simulado: ${rangeSimulado}`);

console.log("\n--- Estrutura de Repetição for...in em JavaScript (Objetos) ---");
// Iterando sobre as propriedades de um objeto
const pessoa = { nome: "Ana", idade: 30, cidade: "Liverpool" };
for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}