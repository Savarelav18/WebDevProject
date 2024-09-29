package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query( "FROM Producto p JOIN Categoria c ON p.categoria.id = c.id WHERE c.nombre = :categoria" )
    List<Producto> findAllByCategoria(String categoria);
}
