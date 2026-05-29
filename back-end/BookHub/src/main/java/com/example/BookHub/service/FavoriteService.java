package com.example.BookHub.service;

import com.example.BookHub.entity.Book;
import com.example.BookHub.entity.Favorite;
import com.example.BookHub.entity.User;
import com.example.BookHub.repository.BookRepository;
import com.example.BookHub.repository.FavoriteRepository;
import com.example.BookHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoriteService {

    @Autowired
    FavoriteRepository repository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    public void adicionarFavorito(Long userId, Long bookId){
        User usuario = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Book livro = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        boolean jaExiste = repository.findByUsuarioAndLivro(usuario,livro).isPresent();

        if(!jaExiste){
            Favorite favorito = new Favorite(livro,usuario);
            repository.save(favorito);

        }
    }

    public void removerFavorito(Long userId, Long bookId){
        User usuario = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Book livro = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));

        boolean jaExiste = repository.findByUsuarioAndLivro(usuario,livro).isPresent();

        if(jaExiste){
            repository.deleteByUsuarioAndLivro(usuario,livro);
        }
    }


    public List<Favorite> listarFavoritoByUsuario(Long userId){
        User usuario = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        return repository.findByUsuario(usuario);
    }

}
