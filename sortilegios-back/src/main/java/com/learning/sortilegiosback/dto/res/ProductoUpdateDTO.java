package com.learning.sortilegiosback.dto.res;

import com.learning.sortilegiosback.model.Categoria;
import com.learning.sortilegiosback.model.Divisa;
import com.learning.sortilegiosback.model.Imagen;
import lombok.*;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoUpdateDTO {
    private String nombre;
    private String descripcion;
    private String creador;
    private String advertencia;
    private String duracion;
    private Double precio;
    private Long cantidad;
    private String categoria;
    private String divisa;
    private Double calificacion;
    private String efectoVisual;
    private String efecto;
    private List<String> imagenes;
    private List<ComentarioDTO> comentarios;
}
