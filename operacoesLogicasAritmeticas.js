// Operadores Aritméticos
console.log("--- Operadores Aritméticos em JavaScript ---");
let numero1 = 10;
let numero2 = 5;

console.log(`Soma: ${numero1 + numero2}`);
console.log(`Subtração: ${numero1 - numero2}`);
console.log(`Multiplicação: ${numero1 * numero2}`);
console.log(`Divisão: ${numero1 / numero2}`);
console.log(`Resto da Divisão: ${numero1 % numero2}`);
console.log(`Potência: ${numero1 ** numero2}`);

// Operadores de Atribuição
console.log("\n--- Operadores de Atribuição em JavaScript ---");
let x = 5;
console.log(`Valor inicial de x: ${x}`);

x += 3; // Equivalente a x = x + 3
console.log(`x += 3: ${x}`);

x -= 2; // Equivalente a x = x - 2
console.log(`x -= 2: ${x}`);

x *= 4; // Equivalente a x = x * 4
console.log(`x *= 4: ${x}`);

// Operadores de Comparação
console.log("\n--- Operadores de Comparação em JavaScript ---");
let a = 7;
let b = 10;

console.log(`${a} == ${b}: ${a == b}`);
console.log(`${a} != ${b}: ${a != b}`);
console.log(`${a} > ${b}: ${a > b}`);
console.log(`${a} < ${b}: ${a < b}`);
console.log(`${a} >= ${b}: ${a >= b}`);
console.log(`${a} <= ${b}: ${a <= b}`);

// Operadores Lógicos
console.log("\n--- Operadores Lógicos em JavaScript ---");
let idade = 20;
let temPermissao = true;

let resultadoAnd = idade > 18 && temPermissao;
console.log(`idade > 18 e temPermissao: ${resultadoAnd}`);

let temCarteira = false;
let podeDirigir = idade > 18 || temCarteira;
console.log(`idade > 18 ou temCarteira: ${podeDirigir}`);

let naoTemPermissao = !temPermissao;
console.log(`não temPermissao: ${naoTemPermissao}`);

// Condições Lógicas (if, else if, else)
console.log("\n--- Condições Lógicas em JavaScript ---");
let nota = 75;

if (nota >= 70) {
    console.log("Aprovado!");
} else if (nota >= 50) {
    console.log("Recuperação.");
} else {
    console.log("Reprovado.");
}

let nivel = "admin";
if (nivel === "admin" && idade > 25) {
    console.log("Acesso administrativo concedido.");
} else {
    console.log("Acesso administrativo negado.");
}