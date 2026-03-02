const livros = [
    {
      titulo: "O iluminado",
      capa: "./img/iluminado.jpg",
      avaliacao: 4.8,
      categoria: "mais-famosos"
    },
    {
        titulo: "Vidas Secas",
        capa: "./img/618-b9Im6dL._AC_UF1000,1000_QL80_.jpg",
        avaliacao: 4.8,
        categoria: "mais-famosos"
    },
    {
        titulo: "1984",
        capa: "./img/images.png",
        avaliacao: 4.7,
        categoria: "mais-famosos"
    }
];

function criarCard(livro) {
    return `
    <div class="book-card">
      <img class="book-cover" src="${livro.capa}" alt="${livro.titulo}">
      <h3 class="book-title">${livro.titulo}</h3>
      <span class="book-rating">${livro.avaliacao}</span>
    </div>
  `;
}

function renderizarLivros() {
    livros.forEach(livro => {
      const container = document.getElementById(livro.categoria);
      container.innerHTML += criarCard(livro);
    });
}
  
  renderizarLivros();