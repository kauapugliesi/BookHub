const books = {
    0:{
        title: "O Iluminado",
        author: "Stephen King",
        genre: "Terror",
        cover: "./img/iluminado.jpg",
        description: "Um escritor aceita trabalhar como zelador de um hotel isolado durante o inverno, onde forças sobrenaturais começam a afetar sua sanidade.",
        rating: 4.8,
        category: "mais-famosos"
    },
    1:{
        title: "Vidas Secas",
        author: "Graciliano Ramos",
        genre: "Drama",
        cover: "./img/secas.jpg",
        description: "Romance que retrata a vida dura de uma família sertaneja enfrentando a seca no nordeste brasileiro.",
        rating: 4.8,
        category: "mais-famosos"
    },
    2:{
        title: "1984",
        author: "George Orwell",
        genre: "Distopia",
        cover: "./img/images.png",
        description: "Distopia sobre um regime totalitário que vigia e controla todos os aspectos da vida das pessoas.",
        rating: 4.8,
        category: "mais-famosos"
    },
    3:{
        title: "Café com Deus Pai",
        author: "Junior Rostirola",
        genre: "Espiritualidade",
        cover: "./img/cafe.jpg",
        description: "Livro devocional com reflexões diárias voltadas para fé e espiritualidade.",
        rating: 3.7,
        category: "top-semana"
    },
    4:{
        title: "A Cabeça do Santo",
        author: "Socorro Acioli",
        genre: "Realismo mágico",
        cover: "./img/santo.jpg",
        description: "Um jovem passa a ouvir as preces das pessoas enquanto vive dentro da cabeça oca de uma estátua de santo.",
        rating: 4.7,
        category: "top-semana"
    },
    5:{
        title: "Tudo é Rio",
        author: "Carla Madeira",
        genre: "Drama",
        cover: "./img/rio.jpg",
        description: "Romance intenso sobre amor, perda e redenção.",
        rating: 4.7,
        category: "top-semana"
    },
    6:{
        title: "Misery",
        author: "Stephen King",
        genre: "Suspense",
        cover: "./img/misery.jpg",
        description: "Um escritor é sequestrado por sua maior fã e forçado a reescrever seu livro.",
        rating: 4.8,
        category: "genero-comum"
    },
    7:{
        title: "It",
        author: "Stephen King",
        genre: "Terror",
        cover: "./img/it.jpg",
        description: "Um grupo de crianças enfrenta uma entidade maligna que assume a forma de seus maiores medos.",
        rating: 4.5,
        category: "genero-comum"
    },
    8:{
        title: "A Paciente Silenciosa",
        author: "Alex Michaelides",
        genre: "Thriller",
        cover: "./img/paciente.jpg",
        description: "Thriller psicológico sobre uma mulher que para de falar após um assassinato.",
        rating: 4.8,
        category: "genero-comum"
    }
};

const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

const book = books[bookId];

if(book){
document.getElementById("title").textContent = book.title;
document.getElementById("author").textContent = book.author;
document.getElementById("genre").textContent = book.genre;
document.getElementById("cover").src = book.cover;
document.getElementById("description").textContent = book.description;
document.getElementById("rating").textContent = book.rating;
}

