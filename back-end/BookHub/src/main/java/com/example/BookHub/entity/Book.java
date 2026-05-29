package com.example.BookHub.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "book_title")
    private String titulo;

    @Column(name = "book_author")
    private String autor;

    @Column(name = "book_description")
    private String descricao;

    @Column(name = "book_cover")
    private String capa;

    @Column(name = "book_avaliation")
    private Double avaliacao;

    @Column(name = "book_genre")
    private String genero;

    @Column(name = "book_category")
    private String categoria;



    public Book(){

    }

    public Book(Long id, String titulo, String autor, String capa, Double avaliacao, String categoria, String genero, String descricao) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.capa = capa;
        this.avaliacao = avaliacao;
        this.categoria = categoria;
        this.genero = genero;
        this.descricao = descricao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
}