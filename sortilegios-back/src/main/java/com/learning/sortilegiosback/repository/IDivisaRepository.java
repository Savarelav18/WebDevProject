package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Categoria;
import com.learning.sortilegiosback.model.Divisa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IDivisaRepository extends JpaRepository<Divisa, Long> {
    Optional<Divisa> findByNombre(String nombre);
}
