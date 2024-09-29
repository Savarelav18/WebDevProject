package com.learning.sortilegiosback.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "carrito")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Carrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @OneToOne
    @JoinColumn(name = "compra_id", referencedColumnName = "id")
    Compra compra;

    @OneToMany
    Set<ProductoCarrito> productosCarrito;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    Usuario usuario;
}
