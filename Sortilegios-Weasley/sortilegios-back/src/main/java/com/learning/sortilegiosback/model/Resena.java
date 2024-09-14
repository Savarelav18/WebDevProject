package com.learning.sortilegiosback.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "resena")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Resena {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String comentario;
    Date fecha;
    Double calificacion;
    String titulo;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    Producto producto;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    Usuario usuario;
}
