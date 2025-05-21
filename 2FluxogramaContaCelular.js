const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularContaTelefonica() {
  readline.question("Digite a quantidade de minutos utilizados: ", (minutosUtilizadosStr) => {
    const minutosUtilizados = parseInt(minutosUtilizadosStr);

    if (!isNaN(minutosUtilizados)) {
      let valorDaConta;
      if (minutosUtilizados <= 200) {
        valorDaConta = minutosUtilizados * 0.20;
      } else if (minutosUtilizados > 200 && minutosUtilizados <= 400) {
        valorDaConta = minutosUtilizados * 0.18;
      } else {
        valorDaConta = minutosUtilizados * 0.15;
      }
      console.log(`O valor da sua conta telefônica é: R$ ${valorDaConta.toFixed(2)}`);
    } else {
      console.log("Por favor, digite um número inteiro válido para os minutos utilizados.");
    }
    readline.close();
  });
}

calcularContaTelefonica();