package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Carrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICarritoRepository extends JpaRepository<Carrito, Long> {
    @Query( value = "SELECT * FROM carrito JOIN compra WHERE compra_id = compra.id", nativeQuery = true)
    public List<Carrito> findAll();
}
