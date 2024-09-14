package com.learning.sortilegiosback.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
public class ProductoCarritoPKId implements Serializable {
    @Column(name = "producto_id")
    private Long productoId;
    @Column(name = "carrito_id")
    private Long carritoId;
}
