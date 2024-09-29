package com.learning.sortilegiosback.dto.res;

import com.learning.sortilegiosback.model.ProductoCarrito;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CompraResDTO {
    String direccion;
    Double total;
    List<ProductoDTO> productos;
}
