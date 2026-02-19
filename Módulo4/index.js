let estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
  // Verifica se o livro já existe
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log("O livro já existe no estoque.");
      return;
    }
  }
  // Adiciona o livro se não existir
  estoque.push({
    titulo: titulo,
    autor: autor,
    quantidade: quantidade
  });
  console.log("Livro adicionado com sucesso!");
}

function removerLivro(titulo) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque.splice(i, 1);
      console.log("Livro removido com sucesso!");
      return;
    }
  }
  console.log("Livro não encontrado no estoque.");
}

function atualizarQuantidade(titulo, novaQuantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log("Quantidade atualizada com sucesso!");
      return;
    }
  }
  console.log("Livro não encontrado no estoque.");
}

function listarLivros() {
  if (estoque.length === 0) {
    console.log("O estoque está vazio.");
    return;
  }
  console.log("Livros disponíveis no estoque:");
  for (let livro of estoque) {
    console.log(
      `Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`
    );
  }
}

//testes:

adicionarLivro("Dom Casmurro", "Machado de Assis", 10);
adicionarLivro("O Hobbit", "J.R.R. Tolkien", 5);
listarLivros();

atualizarQuantidade("O Hobbit", 8);
removerLivro("Dom Casmurro");

listarLivros();
