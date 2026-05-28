const livros = [
    {
      titulo: "O iluminado",
      capa: "./img/iluminado.jpg",
      avaliacao: 4.8,
      categoria: "mais-famosos"
    },
    {
        titulo: "Vidas Secas",
        capa: "./img/secas.jpg",
        avaliacao: 4.8,
        categoria: "mais-famosos"
    },
    {
        titulo: "1984",
        capa: "./img/images.png",
        avaliacao: 4.8,
        categoria: "mais-famosos"
    },
    {
        titulo: "Café com Deus Pai",
        capa: "./img/cafe.jpg",
        avaliacao: 3.7,
        categoria: "top-semana"
    },
    {
        titulo: "A cabeça do santo",
        capa: "./img/santo.jpg",
        avaliacao: 4.7,
        categoria: "top-semana"
    },
    {
        titulo: "Tudo é rio",
        capa: "./img/rio.jpg",
        avaliacao: 4.7,
        categoria: "top-semana"
    },
    {
        titulo: "Misery",
        capa: "./img/misery.jpg",
        avaliacao: 4.8,
        categoria: "genero-comum"
    },
    {
        titulo: "It",
        capa: "./img/it.jpg",
        avaliacao: 4.5,
        categoria: "genero-comum"
    },
    {
        titulo: "A paciente silenciosa",
        capa: "./img/paciente.jpg",
        avaliacao: 4.8,
        categoria: "genero-comum"
    }
];

function criarCard(livro, id) {
    return `
    <a href="book.html?id=${id}">
      <div class="book-card">
        <img class="book-cover" src="${livro.capa}" alt="${livro.titulo}">
        <h3 class="book-title">${livro.titulo}</h3>
        <p class="book-rating">${livro.avaliacao}</p>
      </div>
    </a>
  `;
}

function renderizarLivros() {
    livros.forEach((livro, index) => {
      const container = document.getElementById(livro.categoria);
      container.innerHTML += criarCard(livro, index);
    });
}

const userName = localStorage.getItem("userName");

if(userName){
    document.querySelector("#main-title")
        .textContent = `Olá, ${userName}`;
}

renderizarLivros();