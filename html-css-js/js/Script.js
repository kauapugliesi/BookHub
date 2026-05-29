const userName = localStorage.getItem("userName");

if(userName){
    const titleElement = document.querySelector("#main-title");
    if(titleElement) titleElement.textContent = `Olá, ${userName}`;
}

const carouselStates = {};

function criarCard(livro) {
    return `
    <a href="book.html?id=${livro.id}">
      <div class="book-card">
        <img class="book-cover" src="${livro.capa}" alt="${livro.titulo}">
        <h3 class="book-title">${livro.titulo}</h3>
        <p class="book-rating">⭐ ${livro.avaliacao}</p>
      </div>
    </a>
  `;
}


function moveCarousel(trackId, direction) {
    const track = document.getElementById(trackId);
    if (!track) return;

    if (!carouselStates[trackId]) {
        carouselStates[trackId] = { currentX: 0 };
    }

    const windowWidth = track.parentElement.clientWidth;
    const trackWidth = track.scrollWidth;
    const maxMove = trackWidth - windowWidth;

    if (maxMove <= 0) return;

    const moveAmount = windowWidth * 0.8;
    

    let newX = carouselStates[trackId].currentX - (direction * moveAmount);


    if (direction === 1 && Math.abs(carouselStates[trackId].currentX) >= maxMove) {
        newX = 0;
    } else if (direction === -1 && carouselStates[trackId].currentX >= 0) {
        newX = -maxMove;
    } else {
        if (newX < -maxMove) newX = -maxMove;
        if (newX > 0) newX = 0;
    }

    carouselStates[trackId].currentX = newX;
    track.style.transform = `translateX(${newX}px)`;
}

async function renderizarLivros() {
    try {
               
        const response = await fetch("http://localhost:8080/books");
           
        livros = await response.json();
          
        livros.forEach((livro) => {
            const container = document.getElementById(livro.categoria);
            if(container){
                container.innerHTML += criarCard(livro);
            }
        });

        const resultsSubtitle = document.getElementById("results-subtitle");
        if (resultsSubtitle) {
            resultsSubtitle.textContent = `${livros.length} livros encontrados`;
        }

    } catch(error){
        console.error("Erro ao renderizar livros:", error);
    }
}

renderizarLivros();
