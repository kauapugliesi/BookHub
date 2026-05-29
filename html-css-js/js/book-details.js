document.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");

    if (bookId) {

        await buscarLivroNoBanco(bookId);
        await verificarFavorito(bookId);

    } else {

        console.error("ID do livro não encontrado na URL.");

    }

});

let favorito = false;

async function verificarFavorito(bookId) {

    const userId = localStorage.getItem("userId");

    if (!userId) {
        return;
    }

    try {

        const response = await fetch(
            `http://localhost:8080/favorites/${userId}`
        );

        if (!response.ok) {
            throw new Error("Erro ao buscar favoritos");
        }

        const favoritos = await response.json();

        favorito = favoritos.some(
            fav => fav.book.id == bookId
        );

        if (favorito) {

            const favBtn = document.getElementById('fav-btn');
            const icon = favBtn.querySelector('i');

            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');

            favBtn.classList.add('active');
        }

    } catch (error) {

        console.error("Erro ao verificar favoritos:", error);

    }

}

async function buscarLivroNoBanco(id) {

    const overlay = document.getElementById('loading-overlay');
    const content = document.getElementById('book-content');

    try {

        if (overlay) overlay.classList.remove('fade-out');

        const response = await fetch(`http://localhost:8080/books/${id}`);

        if (!response.ok) {
            throw new Error("Livro não encontrado no banco de dados.");
        }

        const book = await response.json();

        if (document.getElementById("title"))
            document.getElementById("title").textContent = book.title || book.titulo;

        if (document.getElementById("author"))
            document.getElementById("author").textContent = book.author || book.autor;

        if (document.getElementById("genre"))
            document.getElementById("genre").textContent = book.genre || book.genero;

        if (document.getElementById("cover"))
            document.getElementById("cover").src = book.cover || book.capa;

        if (document.getElementById("description"))
            document.getElementById("description").textContent = book.descricao || book.sinopse;

        if (document.getElementById("rating"))
            document.getElementById("rating").textContent = book.rating || book.avaliacao;

        if (document.getElementById("book-pages"))
            document.getElementById("book-pages").innerHTML =
                `<i class="fa-regular fa-file-lines"></i> ${book.pages || book.paginas || '---'} páginas`;

        if (document.getElementById("book-publisher"))
            document.getElementById("book-publisher").textContent =
                book.publisher || book.editora || '-';

        if (document.getElementById("book-year"))
            document.getElementById("book-year").textContent =
                book.year || book.ano || '-';

        if (document.getElementById("book-isbn"))
            document.getElementById("book-isbn").textContent =
                book.isbn || '-';

        if (content)
            content.classList.remove('hidden');

        if (overlay) {

            setTimeout(() => {
                overlay.classList.add('fade-out');
            }, 500);

        }

    } catch (error) {

        console.error("Erro ao carregar livro do banco:", error);

        if (document.getElementById("description")) {

            document.getElementById("description").textContent =
                "Não foi possível carregar as informações deste livro.";

        }

        if (overlay)
            overlay.classList.add('fade-out');
    }
}

const favBtn = document.getElementById('fav-btn');

if (favBtn) {

    favBtn.addEventListener('click', async () => {

        const userId = localStorage.getItem("userId");

        if (!userId) {

            alert("Faça login para favoritar livros.");
            return;

        }

        const params = new URLSearchParams(window.location.search);
        const bookId = params.get("id");

        try {

            if (favorito) {

        

                const response = await fetch(
                    `http://localhost:8080/favorites/${userId}/${bookId}`,
                    {
                        method: "DELETE"
                    }
                );

                if (!response.ok) {
                    throw new Error("Erro ao remover favorito");
                }

                favorito = false;

            } else {


                const response = await fetch(
                    `http://localhost:8080/favorites/${userId}/${bookId}`,
                    {
                        method: "POST"
                    }
                );

                if (!response.ok) {
                    throw new Error("Erro ao adicionar favorito");
                }

                favorito = true;

            }

            const icon = favBtn.querySelector('i');

            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');

            favBtn.classList.toggle('active');

        } catch (error) {

            console.error("Erro ao atualizar favorito:", error);

        }

    });

}