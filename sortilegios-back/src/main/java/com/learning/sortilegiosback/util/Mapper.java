package com.learning.sortilegiosback.util;

import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.model.Imagen;
import com.learning.sortilegiosback.model.Producto;

import java.util.List;

public class Mapper {
    public static ProductosPreviewDTO mapToProductosPreviewDTO(Producto producto, Double calificacion, List<String> imagenes){
        return ProductosPreviewDTO.builder()
                .id(producto.getId())
                .nombre(producto.getNombre())
                .precio(producto.getPrecio())
                .divisa(producto.getDivisa().getNombre())
                .calificacion(calificacion)
                .categoria(producto.getCategoria().getNombre())
                .imagenes(imagenes)
                .build();
    }
}
