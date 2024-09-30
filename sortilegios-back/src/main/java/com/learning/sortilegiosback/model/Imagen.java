package com.learning.sortilegiosback.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "imagen")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Imagen {
    @Id
    Long id;
    String url;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    Producto producto;
}
