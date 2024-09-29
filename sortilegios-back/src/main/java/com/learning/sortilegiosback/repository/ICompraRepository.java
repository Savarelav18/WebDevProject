package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICompraRepository extends JpaRepository<Compra, Long> {
    @Query ("FROM Compra c WHERE c.usuario.username = :username")
    List<Compra> findByUsuarioUsername(String username);
}
