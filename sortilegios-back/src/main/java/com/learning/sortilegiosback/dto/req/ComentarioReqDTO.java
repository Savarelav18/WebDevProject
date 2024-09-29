package com.learning.sortilegiosback.dto.req;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Getter
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ComentarioReqDTO {
    String comentario;
    Date fecha;
    Double calificacion;
    String titulo;
    Long productoId;
    String username;
}
