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
public class ProductosPreviewDTO {
    Long id;
    String nombre;
    String categoria;
    String divisa;
    Double calificacion;
    Double precio;
    List<String> imagenes;
}
