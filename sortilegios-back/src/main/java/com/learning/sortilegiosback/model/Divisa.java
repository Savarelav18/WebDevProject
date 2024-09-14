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
@Table(name = "divisa")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Divisa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String nombre;

    @OneToMany(mappedBy = "divisa")
    Set<Producto> productos;
}
