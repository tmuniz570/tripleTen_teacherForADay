const filmesJavaScript = {
  "O Poderoso Chefão": { ano: 1972, genero: "Drama/Crime", duracao: 175 },
  "Um Sonho de Liberdade": { ano: 1994, genero: "Drama", duracao: 142 },
  "Forrest Gump": { ano: 1994, genero: "Drama/Comédia", duracao: 142 },
  "Pulp Fiction": { ano: 1994, genero: "Crime/Drama", duracao: 154 },
  "O Senhor dos Anéis: O Retorno do Rei": { ano: 2003, genero: "Fantasia/Aventura", duracao: 201 },
  "A Lista de Schindler": { ano: 1993, genero: "Drama/Histórico", duracao: 195 },
  "Clube da Luta": { ano: 1999, genero: "Drama", duracao: 139 },
  "Interestelar": { ano: 2014, genero: "Ficção Científica/Drama", duracao: 169 },
  "Cidade de Deus": { ano: 2002, genero: "Crime/Drama", duracao: 130 },
  "Parasita": { ano: 2019, genero: "Drama/Suspense", duracao: 132 },
};

// Imprimindo o objeto inicial
console.log("\nObjeto de filmes inicial:");
console.log(filmesJavaScript);

// Para acessar informações de um filme específico:
console.log(filmesJavaScript["O Poderoso Chefão"].ano); // Saída: 1972
console.log(filmesJavaScript["Parasita"].genero);     // Saída: Drama/Suspense

// 1. Adicionar um novo filme
filmesJavaScript["Vingadores: Ultimato"] = { ano: 2019, genero: "Ação/Ficção Científica", duracao: 181 };
console.log("\n1. Filme adicionado:");
console.log(filmesJavaScript["Vingadores: Ultimato"]);

// 2. Acessar todos os títulos dos filmes (chaves)
const titulosJavaScript = Object.keys(filmesJavaScript);
console.log("\n2. Títulos dos filmes:");
console.log(titulosJavaScript);

// 3. Acessar todos os detalhes dos filmes (valores)
const detalhesJavaScript = Object.values(filmesJavaScript);
console.log("\n3. Detalhes dos filmes:");
detalhesJavaScript.forEach(filme => console.log(filme));

// 4. Acessar todos os pares chave-valor (título e detalhes)
const entradasJavaScript = Object.entries(filmesJavaScript);
console.log("\n4. Pares título-detalhes:");
entradasJavaScript.forEach(([titulo, detalhes]) => {
  console.log(`${titulo}: ${JSON.stringify(detalhes)}`); // Usando JSON.stringify para melhor visualização do objeto
});

// 5. Verificar se um filme existe (pela chave)
if ("Pulp Fiction" in filmesJavaScript) {
  console.log("\n5. 'Pulp Fiction' está na lista.");
}

if (!("Titanic" in filmesJavaScript)) {
  console.log("\n5. 'Titanic' não está na lista.");
}

// 6. Obter o ano de lançamento de um filme específico (com tratamento de erro)
const filmeDesejadoJS = "Interestelar";
const anoLancamentoJS = filmesJavaScript[filmeDesejadoJS]?.ano || "Filme não encontrado ou ano indisponível.";
console.log(`\n6. Ano de lançamento de '${filmeDesejadoJS}': ${anoLancamentoJS}`);

// 7. Modificar a duração de um filme
const filmeParaModificarJS = "O Poderoso Chefão";
filmesJavaScript[filmeParaModificarJS].duracao = 178;
console.log(`\n7. Duração de '${filmeParaModificarJS}' modificada para: ${filmesJavaScript[filmeParaModificarJS].duracao} minutos.`);

// 8. Remover um filme
const filmeParaRemoverJS = "Clube da Luta";
if (filmesJavaScript.hasOwnProperty(filmeParaRemoverJS)) {
  delete filmesJavaScript[filmeParaRemoverJS];
  console.log(`\n8. '${filmeParaRemoverJS}' removido.`);
} else {
  console.log(`\n8. '${filmeParaRemoverJS}' não encontrado para remoção.`);
}

// Imprimindo o objeto final
console.log("\nObjeto de filmes final:");
console.log(filmesJavaScript);

x = 5
y = x == 5 ? "a" : "b"
console.log(y)