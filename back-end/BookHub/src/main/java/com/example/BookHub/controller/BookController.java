package com.example.BookHub.controller;

import com.example.BookHub.entity.Book;
import com.example.BookHub.service.BookService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Book buscarPorId(@PathVariable Long id) {
        return bookService.findbyId(id);
    }

}
