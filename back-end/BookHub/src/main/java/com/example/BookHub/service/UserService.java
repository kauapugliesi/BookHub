package com.example.BookHub.service;

import com.example.BookHub.entity.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final List<User> users = new ArrayList<>();
    private Long proximoId = 1L;

    public UserService() {
        users.add(new User(proximoId++, "Administrador", "admin", "admin@email.com", "Admin123"));
    }

    public List<User> getUsers() {
        return users;
    }

    public User register(User user){
        user.setId(proximoId++);
        users.add(user);
        return user;
    }

    public boolean emailExists(String email) {
        for (User user : users) {
            if (user.getEmail().equalsIgnoreCase(email)) {
                return true;
            }
        }
        return false;
    }

    public User findByEmail(String email){
        for (User user : users){
            if (user.getEmail().equals(email)){
                return user;
            }
        }
        return null;
    }

    public boolean autentication(String email, String password){
        for(User user : users){
            if(user.getEmail().equals(email) && user.getPassword().equals(password)){
                return true;
            }
        }
        return false;
    }


}
