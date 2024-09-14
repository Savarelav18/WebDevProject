package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Divisa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDivisaRepository extends JpaRepository<Divisa, Long> {
}
