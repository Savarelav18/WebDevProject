package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.dto.res.ComentarioDTO;
import com.learning.sortilegiosback.dto.res.ProductoDTO;
import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.exception.NotFoundException;
import com.learning.sortilegiosback.model.Imagen;
import com.learning.sortilegiosback.model.Producto;
import com.learning.sortilegiosback.model.Resena;
import com.learning.sortilegiosback.repository.IImagenRepository;
import com.learning.sortilegiosback.repository.IProductoRepository;
import com.learning.sortilegiosback.repository.IResenaRepository;
import com.learning.sortilegiosback.repository.IUsuarioRepository;
import com.learning.sortilegiosback.util.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
}
