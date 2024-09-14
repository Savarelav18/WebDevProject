package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenRepository extends JpaRepository<Imagen, Long> {
}
