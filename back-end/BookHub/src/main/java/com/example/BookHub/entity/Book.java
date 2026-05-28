package com.example.BookHub.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "book_title")
    private String titulo;

    @Column(name = "book_author")
    private String autor;

    @Column(name = "book_cover")
    private String capa;

    @Column(name = "book_avaliation")
    private Double avaliacao;

    @Column(name = "book_category")
    private String categoria;

    public Book(){

    }

    public Book(Long id, String titulo, String autor, String capa, Double avaliacao, String categoria) {
        Id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.capa = capa;
        this.avaliacao = avaliacao;
        this.categoria = categoria;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getCapa() {
        return capa;
    }

    public void setCapa(String capa) {
        this.capa = capa;
    }

    public Double getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}