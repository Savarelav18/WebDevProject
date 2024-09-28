package com.learning.sortilegiosback.controller;


import com.learning.sortilegiosback.model.Resena;
import com.learning.sortilegiosback.service.ResenaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/resenas")
public class ResenaController {

    private final ResenaService resenaService;

    @Autowired
    public ResenaController(ResenaService resenaService) {
        this.resenaService = resenaService;
    }

    // Obtener todas las reseñas
    @GetMapping
    public List<Resena> getAllResenas() {
        return resenaService.getAllResenas();
    }

    // Obtener una reseña por ID
    @GetMapping("/{id}")
    public ResponseEntity<Resena> getResenaById(@PathVariable Long id) {
        Optional<Resena> resena = resenaService.getResenaById(id);
        return resena.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear una nueva reseña
    @PostMapping
    public Resena createResena(@RequestBody Resena resena) {
        return resenaService.createResena(resena);
    }

    // Actualizar una reseña
    @PutMapping("/{id}")
    public ResponseEntity<Resena> updateResena(@PathVariable Long id, @RequestBody Resena resenaDetails) {
        Resena updatedResena = resenaService.updateResena(id, resenaDetails);
        return ResponseEntity.ok(updatedResena);
    }

    // Eliminar una reseña
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResena(@PathVariable Long id) {
        resenaService.deleteResena(id);
        return ResponseEntity.noContent().build();
    }
}
