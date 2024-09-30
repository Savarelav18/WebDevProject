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
@Table(name = "producto")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String nombre;
    String descripcion;
    String creador;
    String advertencia;
    String duracion;
    Double precio;
    Integer stock;
    String efectoVisual;
    String efecto;

    @ManyToOne
    @JoinColumn(name= "divisa_id", nullable = false)
    Divisa divisa;

    @ManyToOne
    @JoinColumn(name= "categoria_id", nullable = false)
    Categoria categoria;

    @OneToMany(mappedBy = "producto")
    Set<Imagen> imagenes;

    @OneToMany(mappedBy = "producto")
    Set<Resena> resenas;

    @OneToMany(mappedBy = "producto")
    Set<ProductoCarrito> productosCarrito;

}
