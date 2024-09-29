package com.learning.sortilegiosback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "usuario")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Usuario {
    @Id
    String username;
    String password;
    String email;
    String rol;

    @OneToMany(mappedBy = "usuario")
    Set<Resena> resenas;

    @OneToMany(mappedBy = "usuario")
    Set<Compra> compras;

    @OneToMany(mappedBy = "usuario")
    Set<Carrito> carritos;
}
