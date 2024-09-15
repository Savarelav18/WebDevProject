package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.model.Imagen;
import com.learning.sortilegiosback.model.Resena;
import com.learning.sortilegiosback.repository.IImagenRepository;
import com.learning.sortilegiosback.repository.IProductoRepository;
import com.learning.sortilegiosback.repository.IResenaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductosService {
    @Autowired
    private IProductoRepository productoRepository;
    @Autowired
    private IImagenRepository imagenRepository;
    @Autowired
    private IResenaRepository resenaRepository;

    public List<ProductosPreviewDTO> getAllProductos(){
        return productoRepository.findAll().stream().map( producto -> {

            List<Imagen> imagenes = imagenRepository.findByProductoId(producto.getId());

            return ProductosPreviewDTO.builder()
                    .id(producto.getId())
                    .nombre(producto.getNombre())
                    .precio(producto.getPrecio())
                    .divisa(producto.getDivisa().getNombre())
                    .calificacion(getPromedioCalificacion(producto.getId()))
                    .categoria(producto.getCategoria().getNombre())
                    .imagenes(imagenes.stream().map(Imagen::getUrl).toList())
                    .build();

        }).toList();
    }

    private Double getPromedioCalificacion(Long productoId){
        List<Resena> listaResena = resenaRepository.findByProductoId(productoId);
        return listaResena.stream().map(Resena::getCalificacion).reduce(Double::sum).orElse(0.0) / listaResena.size();
    }
}
