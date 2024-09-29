package com.learning.sortilegiosback.dto.res;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ComentarioDTO {
    Long id;
    String usuario;
    String contenido;
    Double calificacion;
    String fecha;
}
