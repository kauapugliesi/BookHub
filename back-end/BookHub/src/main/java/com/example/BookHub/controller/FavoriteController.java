package com.example.BookHub.controller;

import com.example.BookHub.entity.Favorite;
import com.example.BookHub.service.FavoriteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favorites")
@CrossOrigin("*")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PostMapping("/{userId}/{bookId}")
    public void adicionarFavorito(
            @PathVariable Long userId,
            @PathVariable Long bookId){

        favoriteService.adicionarFavorito(userId, bookId);
    }

    @DeleteMapping("/{userId}/{bookId}")
    public void removerFavorito(
            @PathVariable Long userId,
            @PathVariable Long bookId){

        favoriteService.deleteFavorite(userId, bookId);
    }

    @GetMapping("/{userId}")
    public List<Favorite> listarFavoritos(
            @PathVariable Long userId){

        return favoriteService.listarFavoritoByUsuario(userId);
    }
}




