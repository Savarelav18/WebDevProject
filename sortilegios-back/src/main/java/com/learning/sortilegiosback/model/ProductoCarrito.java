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
@Table(name = "producto_carrito")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductoCarrito {
    @EmbeddedId
    ProductoCarritoPKId id;

    @ManyToOne
    @MapsId("productoId")
    @JoinColumn(name = "producto_id")
    Producto producto;

    @ManyToOne
    @MapsId("carritoId")
    @JoinColumn(name = "carrito_id")
    Carrito carrito;

    Integer cantidad;
}
