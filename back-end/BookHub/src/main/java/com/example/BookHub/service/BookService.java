package com.example.BookHub.service;

import com.example.BookHub.entity.Book;
import com.example.BookHub.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository repository;

    public List<Book> listarLivro(){
        return repository.findAll();
    }

    public Book findbyId(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));
    }


}
