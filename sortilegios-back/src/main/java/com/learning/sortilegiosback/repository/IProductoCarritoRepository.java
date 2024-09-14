package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.ProductoCarrito;
import com.learning.sortilegiosback.model.ProductoCarritoPKId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoCarritoRepository extends JpaRepository<ProductoCarrito, ProductoCarritoPKId> {
}
