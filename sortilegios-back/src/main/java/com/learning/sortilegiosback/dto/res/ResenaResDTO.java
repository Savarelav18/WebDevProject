package com.learning.sortilegiosback.dto.res;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResenaResDTO {
    private String username;
    private String comentario;
    private Double calificacion;
    private String fecha;
    private String titulo;
}
