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
@Table(name = "compra")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Double total;
    String direccion;

    @OneToOne(mappedBy = "compra")
    Carrito carrito;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    Usuario usuario;
}
