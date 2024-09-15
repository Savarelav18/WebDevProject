package com.learning.sortilegiosback.dto.res;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductoDTO {
    Long id;
    String nombre;
    String descripcion;
    String creador;
    String advertencia;
    String duracion;
    Double precio;
    Long cantidad;
    String categoria;
    String divisa;
    Double calificacion;
    String efectoVisual;
    String efecto;
    List<String> imagenes;
    List<ComentarioDTO> comentarios;
}
