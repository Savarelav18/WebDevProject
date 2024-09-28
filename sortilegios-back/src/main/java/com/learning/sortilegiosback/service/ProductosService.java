package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.dto.res.ComentarioDTO;
import com.learning.sortilegiosback.dto.res.ProductoDTO;
import com.learning.sortilegiosback.dto.res.ProductoUpdateDTO;
import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.exception.NotFoundException;
import com.learning.sortilegiosback.model.*;
import com.learning.sortilegiosback.repository.*;
import com.learning.sortilegiosback.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.learning.sortilegiosback.model.Divisa;
import com.learning.sortilegiosback.model.Categoria;
import com.learning.sortilegiosback.model.Producto;


import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductosService {
    @Autowired
    private IProductoRepository productoRepository;
    @Autowired
    private IImagenRepository imagenRepository;
    @Autowired
    private IResenaRepository resenaRepository;

    @Autowired
    private IDivisaRepository divisaRepository;

    @Autowired
    private ICategoriaRepository categoriaRepository;

    public List<ProductosPreviewDTO> getAllProductos(){
        return productoRepository.findAll().stream().map( producto -> {

            List<Imagen> imagenes = imagenRepository.findByProductoId(producto.getId());
            Double promedio = getPromedioCalificacion(producto.getId());
            List<String> imagenesUrl = imagenes.stream().map(Imagen::getUrl).toList();

            return Mapper.mapToProductosPreviewDTO(producto, promedio, imagenesUrl);

        }).toList();
    }

    public ProductoDTO getProductoById(Long id){
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto no encontrado"));
        List<Imagen> imagenes = imagenRepository.findByProductoId(producto.getId());
        List<Resena> resenas = resenaRepository.findByProductoId(producto.getId());

        return ProductoDTO.builder()
                .id(producto.getId())
                .nombre(producto.getNombre())
                .descripcion(producto.getDescripcion())
                .creador(producto.getCreador())
                .advertencia(producto.getAdvertencia())
                .duracion(producto.getDuracion())
                .precio(producto.getPrecio())
                .cantidad(producto.getStock().longValue())
                .categoria(producto.getCategoria().getNombre())
                .divisa(producto.getDivisa().getNombre())
                .calificacion(getPromedioCalificacion(producto.getId()))
                .imagenes(imagenes.stream().map(Imagen::getUrl).toList())
                .comentarios(resenas.stream().map(comentario -> {
                    return ComentarioDTO.builder()
                            .id(comentario.getId())
                            .contenido(comentario.getComentario())
                            .calificacion(comentario.getCalificacion())
                            .usuario(comentario.getUsuario().getUsername())
                            .build();
                }).toList())
                .build();
    }

    private Double getPromedioCalificacion(Long productoId){
        List<Resena> listaResena = resenaRepository.findByProductoId(productoId);
        return listaResena.stream().map(Resena::getCalificacion).reduce(Double::sum).orElse(0.0) / listaResena.size();
    }

    public ProductoDTO crearProducto(ProductoUpdateDTO productoDTO) {

        // Crear la entidad Producto
        Producto nuevoProducto = Producto.builder()
                .nombre(productoDTO.getNombre())
                .descripcion(productoDTO.getDescripcion())
                .creador(productoDTO.getCreador())
                .advertencia(productoDTO.getAdvertencia())
                .duracion(productoDTO.getDuracion())
                .precio(productoDTO.getPrecio())
                .stock(productoDTO.getCantidad().intValue())
                .categoria(productoDTO.getCategoria())
                .divisa(productoDTO.getDivisa())
                .imagenes((Set<Imagen>) productoDTO.getImagenes())
                .resenas(null)
                .build();

        // Guardar el nuevo producto en la base de datos
        Producto productoGuardado = productoRepository.save(nuevoProducto);

        // Mapear la entidad guardada a un ProductoDTO y devolverlo
        return ProductoDTO.builder()
                .id(productoGuardado.getId())
                .nombre(productoGuardado.getNombre())
                .descripcion(productoGuardado.getDescripcion())
                .creador(productoGuardado.getCreador())
                .advertencia(productoGuardado.getAdvertencia())
                .duracion(productoGuardado.getDuracion())
                .precio(productoGuardado.getPrecio())
                .cantidad(productoGuardado.getStock().longValue())
                .categoria(productoGuardado.getCategoria().getNombre())
                .divisa(productoGuardado.getDivisa().getNombre())
                .build();
    }

    public Producto updateProductoParcial(Long id, ProductoDTO productoUpdateDTO) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto no encontrado"));

        if (productoUpdateDTO.getNombre() != null) {
            producto.setNombre(productoUpdateDTO.getNombre());
        }
        if (productoUpdateDTO.getDescripcion() != null) {
            producto.setDescripcion(productoUpdateDTO.getDescripcion());
        }
        if (productoUpdateDTO.getCreador() != null) {
            producto.setCreador(productoUpdateDTO.getCreador());
        }
        if (productoUpdateDTO.getAdvertencia() != null) {
            producto.setAdvertencia(productoUpdateDTO.getAdvertencia());
        }
        if (productoUpdateDTO.getDuracion() != null) {
            producto.setDuracion(productoUpdateDTO.getDuracion());
        }
        if (productoUpdateDTO.getPrecio() != null) {
            producto.setPrecio(productoUpdateDTO.getPrecio());
        }

        return productoRepository.save(producto);
    }
}
