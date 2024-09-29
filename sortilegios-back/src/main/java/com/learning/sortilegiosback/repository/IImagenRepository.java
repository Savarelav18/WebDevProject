package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IImagenRepository extends JpaRepository<Imagen, Long> {
    List<Imagen> findByProductoId(Long productoId);
}
