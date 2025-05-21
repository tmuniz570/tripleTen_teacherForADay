const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarCNHIdade() {
  readline.question("Digite sua idade: ", (idadeStr) => {
    const idade = parseInt(idadeStr);

    if (!isNaN(idade)) {
      if (idade >= 18) {
        console.log("Você pode tirar a CNH.");
      } else {
        console.log("Você NÃO pode tirar a CNH.");
      }
    } else {
      console.log("Por favor, digite uma idade válida.");
    }
    readline.close(); // Importante para encerrar a interface readline
  });
}

verificarCNHIdade();