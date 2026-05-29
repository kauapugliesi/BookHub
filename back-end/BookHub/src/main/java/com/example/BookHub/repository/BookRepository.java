package com.example.BookHub.repository;

import com.example.BookHub.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByGenero(String genero);

    List<Book> findByAutor(String autor);

    List<Book> findByTitulo(String titulo);

}
