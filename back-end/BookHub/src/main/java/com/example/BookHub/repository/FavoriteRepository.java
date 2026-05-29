package com.example.BookHub.repository;

import com.example.BookHub.entity.Book;
import com.example.BookHub.entity.Favorite;
import com.example.BookHub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUser(User user);

    List<Favorite> findByBook(Book book);

    Optional<Favorite> findByUserAndBook(User user, Book book);

    void deleteByUser_IdAndBook_Id(Long userId, Long bookId);
}
