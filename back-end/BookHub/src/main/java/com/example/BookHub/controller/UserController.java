package com.example.BookHub.controller;

import com.example.BookHub.entity.User;
import com.example.BookHub.service.UserService;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody User user) {
        if(userService.emailExists(user.getEmail())){
            return ResponseEntity.badRequest().body("email já cadastrado");
        }

        userService.register(user);
        return ResponseEntity.ok("usuário cadastrado com sucesso");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authentication(@RequestBody User user){
        User authenticated = userService.authentication(user.getEmail(), user.getPassword());

        if (authenticated != null) {
            return ResponseEntity.ok(Map.of(
                    "message", "Login realizado com sucesso.",
                    "nickame", authenticated.getNickame()
            ));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha inválidos");
    }


}
