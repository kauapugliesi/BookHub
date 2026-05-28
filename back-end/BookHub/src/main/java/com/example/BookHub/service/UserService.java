package com.example.BookHub.service;

import com.example.BookHub.entity.User;
import com.example.BookHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User register(User user){
        return repository.save(user);
    }

    public boolean emailExists(String email) {
        return repository.existsByEmail(email);
    }

    public User findByEmail(String email){
        return repository.findByEmail(email);
    }

    public User authentication(String email, String password){
        User user = repository.findByEmail(email);

        if(user != null && user.getPassword().equals(password)) {
            return user;

        }

        return null;
    }

}
