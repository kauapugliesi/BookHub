package com.example.BookHub.controller;

import com.example.BookHub.entity.Book;
import com.example.BookHub.service.BookService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin("*")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookservice){
        this.bookService = bookservice;
    }

    @GetMapping
    public List<Book> listarLivros(){
        return bookService.listarLivro();
    }

}
