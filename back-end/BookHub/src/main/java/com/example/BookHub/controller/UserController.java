package com.example.BookHub.controller;

import com.example.BookHub.entity.User;
import com.example.BookHub.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if(userService.emailExists(user.getEmail())){
            return "email já cadastrado";
        }

        userService.register(user);
        return "usuário cadastrado com sucesso";
    }

    @PostMapping("/login")
    public String autentication(@RequestBody User user){
        boolean authenticated = userService.autentication(user.getEmail(), user.getPassword());

        if (authenticated) {
            return "Login realizado com sucesso";
        }

        return "E-mail ou senha inválidos";
    }


}
