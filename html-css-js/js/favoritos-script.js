const userId = localStorage.getItem("userId")


function criarCard(livro) {

    const idSeguro = livro.id;

    if (idSeguro == null) {
        console.error("Livro sem ID:", livro);
        return "";
    }

    return `
    <a href="book.html?id=${idSeguro}">
      <div class="book-card">
        <img class="book-cover" src="${livro.capa || livro.cover}" alt="${livro.titulo || livro.title}">
        <h3 class="book-title">${livro.titulo || livro.title}</h3>
        <p class="book-rating">⭐ ${livro.avaliacao || livro.rating}</p>
      </div>
    </a>
  `;
}

async function renderizarFavoritos() {
    const notFavorited = document.getElementById("not-favorited");
    try {
        const response = await fetch(`http://localhost:8080/favorites/${userId}`);
        
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const favoritos = await response.json();

        const container = document.getElementById('favoritos-list')
        container.innerHTML = '';

        if (favoritos.length === 0) {
            
            notFavorited.style.display = "block";
            return;
        }

        notFavorited.style.display = "none";

        favoritos.forEach((favorito) => { 
            if(container){
                container.innerHTML += criarCard(favorito.book);
            }
        });

    } catch(error){
        console.error("Erro ao buscar livros da API:", error);
    }
}

renderizarFavoritos();