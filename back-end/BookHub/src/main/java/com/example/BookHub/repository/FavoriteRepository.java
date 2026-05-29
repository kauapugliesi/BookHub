package com.example.BookHub.repository;

import com.example.BookHub.entity.Book;
import com.example.BookHub.entity.Favorite;
import com.example.BookHub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUsuario(User user);

    List<Favorite> findByLivro(Book book);

    Optional<Favorite> findByUsuarioAndLivro(User user, Book book);

    void deleteByUsuarioAndLivro(User user, Book book);

}
