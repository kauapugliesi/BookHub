package com.example.BookHub.entity;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class User {

    private Long id;

    @NotBlank(message = "Nome não informado.")
    @Pattern(regexp = "^[A-Za-z]{3,}$")
    private String name;

    @NotBlank(message = "Nome de usuário não informado.")
    private String nickame;

    @NotBlank(message = "Email não informado.")
    @Email
    private String email;

    @NotBlank(message = "Senha não informada.")
    @Pattern(regexp = "^(?=.*[A-Z])[A-Za-z0-9]{8,}$")
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
