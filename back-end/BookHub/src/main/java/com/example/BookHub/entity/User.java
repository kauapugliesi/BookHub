package com.example.BookHub.entity;


public class User {
    private Long id;
    private String name;
    private String nickame;
    private String email;
    private String password;

    public User() {
    }

    public User(Long id, String name, String nickame, String email, String password) {
        this.id = id;
        this.name = name;
        this.nickame = nickame;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickame() {
        return nickame;
    }

    public void setNickame(String nickame) {
        this.nickame = nickame;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
