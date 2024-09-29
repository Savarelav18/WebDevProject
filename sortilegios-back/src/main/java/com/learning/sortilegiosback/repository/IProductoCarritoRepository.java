package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.ProductoCarrito;
import com.learning.sortilegiosback.model.ProductoCarritoPKId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductoCarritoRepository extends JpaRepository<ProductoCarrito, ProductoCarritoPKId> {
    @Query("FROM ProductoCarrito pc WHERE pc.carrito.id = :carritoId" )
    List<ProductoCarrito> findByCarritoId(Long carritoId);
}
