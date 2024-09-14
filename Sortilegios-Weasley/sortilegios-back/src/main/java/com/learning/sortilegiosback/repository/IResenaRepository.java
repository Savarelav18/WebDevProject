package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Resena;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IResenaRepository extends JpaRepository<Resena, Long> {
}
