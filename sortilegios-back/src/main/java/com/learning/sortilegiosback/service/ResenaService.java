package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.dto.req.ComentarioReqDTO;
import com.learning.sortilegiosback.dto.res.MessageDTO;
import com.learning.sortilegiosback.dto.res.ResenaResDTO;
import com.learning.sortilegiosback.exception.NotFoundException;
import com.learning.sortilegiosback.model.Producto;
import com.learning.sortilegiosback.model.Resena;
import com.learning.sortilegiosback.model.Usuario;
import com.learning.sortilegiosback.repository.IProductoRepository;
import com.learning.sortilegiosback.repository.IResenaRepository;
import com.learning.sortilegiosback.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class ResenaService {
    private final IResenaRepository resenaRepository;
    private final IProductoRepository productoRepository;
    private final IUsuarioRepository usuarioRepository;

    @Autowired
    public ResenaService(IResenaRepository resenaRepository, IProductoRepository productoRepository, IUsuarioRepository usuarioRepository) {
        this.resenaRepository = resenaRepository;
        this.productoRepository = productoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    // Obtener todas las reseñas
    public List<ResenaResDTO> getAllResenas() {
        return resenaRepository.findAll().stream().map(resena -> {
            return ResenaResDTO.builder()
                    .calificacion(resena.getCalificacion())
                    .fecha(resena.getFecha().toString())
                    .titulo(resena.getTitulo())
                    .comentario(resena.getComentario())
                    .username(resena.getUsuario().getUsername())
                    .build();
        }).toList();

    }
    // Obtener una reseña por ID
    public Optional<Resena> getResenaById(Long id) {
        return resenaRepository.findById(id);
    }

    // Crear una nueva reseña
    public MessageDTO createResena(ComentarioReqDTO comentario) {
        Resena resena = Resena.builder()
                .id(resenaRepository.count()+1)
                .calificacion(comentario.getCalificacion())
                .fecha(LocalDate.now())
                .titulo(comentario.getTitulo())
                .comentario(comentario.getComentario())
                .build();

        Producto producto = productoRepository.findById(comentario.getProductoId())
                .orElseThrow(() -> new NotFoundException("Producto no encontrado"));
        Usuario usuario = usuarioRepository.findById(comentario.getUsername())
                .orElseThrow(() -> new NotFoundException("Usuario no encontrado"));

        resena.setProducto(producto);
        resena.setUsuario(usuario);
        resenaRepository.save(resena);
        return new MessageDTO("Reseña creada exitosamente");
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
