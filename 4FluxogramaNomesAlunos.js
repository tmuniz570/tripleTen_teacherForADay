const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function lerNomes() {
  const listaDeNomes = [];

  for (let contador = 1; contador <= 10; contador++) {
    const nomeAluno = await new Promise((resolve) => {
      readline.question(`Digite o nome do Aluno (${contador}/10): `, resolve);
    });
    listaDeNomes.push(nomeAluno);
  }

  console.log("\nLista de nomes lidos:");
  listaDeNomes.forEach(nome => console.log(nome));

  console.log("\n\n\nLista de nomes lidos sem usar for:");
  console.log(...listaDeNomes)

  console.log("\nFim");
  readline.close();
}

lerNomes();