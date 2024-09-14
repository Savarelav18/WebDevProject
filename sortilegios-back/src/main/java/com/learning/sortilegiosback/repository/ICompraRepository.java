package com.learning.sortilegiosback.repository;

import com.learning.sortilegiosback.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICompraRepository extends JpaRepository<Compra, Long> {
}
