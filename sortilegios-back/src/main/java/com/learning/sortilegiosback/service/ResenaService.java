package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.model.Resena;
import com.learning.sortilegiosback.repository.IResenaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class ResenaService {
    private final IResenaRepository resenaRepository;

    @Autowired
    public ResenaService(IResenaRepository resenaRepository) {
        this.resenaRepository = resenaRepository;
    }

    // Obtener todas las reseñas
    public List<Resena> getAllResenas() {
        return resenaRepository.findAll();
    }

    // Obtener una reseña por ID
    public Optional<Resena> getResenaById(Long id) {
        return resenaRepository.findById(id);
    }

    // Crear una nueva reseña
    public Resena createResena(Resena resena) {
        resena.setFecha(new Date()); // Establecer la fecha actual
        return resenaRepository.save(resena);
    }

    // Actualizar una reseña
    public Resena updateResena(Long id, Resena resenaDetails) {
        return resenaRepository.findById(id).map(resena -> {
            resena.setComentario(resenaDetails.getComentario());
            resena.setCalificacion(resenaDetails.getCalificacion());
            resena.setTitulo(resenaDetails.getTitulo());
            return resenaRepository.save(resena);
        }).orElseGet(() -> {
            resenaDetails.setId(id);
            return resenaRepository.save(resenaDetails);
        });
    }

    // Eliminar una reseña
    public void deleteResena(Long id) {
        resenaRepository.deleteById(id);
    }
}
