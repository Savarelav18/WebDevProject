package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.dto.res.*;
import com.learning.sortilegiosback.exception.BadRequestException;
import com.learning.sortilegiosback.exception.NotFoundException;
import com.learning.sortilegiosback.model.*;
import com.learning.sortilegiosback.repository.*;
import com.learning.sortilegiosback.util.ConversorDivisa;
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

    public List<ProductosPreviewDTO> getAllProductos(String order, String filter){
        List<Producto> productos = getProductosByCategoria(filter);

        return sortProductos(order, productos).stream().map( producto -> {

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
                .efectoVisual(producto.getEfectoVisual())
                .efecto(producto.getEfecto())
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

    public MessageDTO crearProducto(ProductoUpdateDTO productoDTO) {
        Long productoId = productoRepository.count()+1;
        // Crear la entidad Producto
        Producto nuevoProducto = Producto.builder()
                .id(productoId)
                .nombre(productoDTO.getNombre())
                .descripcion(productoDTO.getDescripcion())
                .creador(productoDTO.getCreador())
                .advertencia(productoDTO.getAdvertencia())
                .duracion(productoDTO.getDuracion())
                .precio(productoDTO.getPrecio())
                .stock(productoDTO.getCantidad().intValue())
                .categoria(categoriaRepository.findByNombre(productoDTO.getCategoria()).orElseThrow(() -> new NotFoundException("Categoria no encontrada")))
                .divisa(divisaRepository.findByNombre(productoDTO.getDivisa()).orElseThrow(() -> new NotFoundException("Divisa no encontrada")))
                .imagenes(Set.of())
                .resenas(Set.of())
                .build();
        Producto productoGuardado = productoRepository.save(nuevoProducto);
        productoDTO.getImagenes().forEach(imagen -> {
            Imagen nuevaImagen = Imagen.builder()
                    .id(imagenRepository.count() +1)
                    .url(imagen)
                    .producto(productoGuardado)
                    .build();
            imagenRepository.save(nuevaImagen);
        });
        // Guardar el nuevo producto en la base de datos


        // Mapear la entidad guardada a un ProductoDTO y devolverlo
        return MessageDTO.builder()
                .mensaje("Producto creado exitosamente")
                .build();
    }

    public MessageDTO updateProductoParcial(Long id, ProductoDTO productoUpdateDTO) {
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
        productoRepository.save(producto);
        return MessageDTO.builder()
                .mensaje("Producto actualizado exitosamente")
                .build();
    }
    private List<Producto> getProductosByCategoria(String categoria) {
        if (!categoria.equals("none") && !categoria.equals("Bromas") && !categoria.equals("Dulces") && !categoria.equals("Explosivos")){
            throw new BadRequestException("El parámetro categoria debe ser 'Bromas' o 'Dulces' o 'Explosivos' o no tener en su defecto");
        }
        if (categoria.equals("none")) {
            return productoRepository.findAll();
        }
        return productoRepository.findAllByCategoria(categoria);

    }
    private List<Producto> sortProductos(String sort, List<Producto> productos) {
        if (!sort.equals("none") && !sort.equals("asc") && !sort.equals("desc")) {
            throw new BadRequestException("El parámetro sort debe ser 'asc' o 'desc' o no tener en su defecto");
        }
        if (sort.equals("asc")) {
            productos.sort((a, b) -> ConversorDivisa.convertirDivisa(a.getPrecio(), a.getDivisa().getNombre()).compareTo(ConversorDivisa.convertirDivisa(b.getPrecio(), b.getDivisa().getNombre())));
            return productos;
        } else if (sort.equals("desc")) {
            productos.sort((a, b) -> ConversorDivisa.convertirDivisa(b.getPrecio(), b.getDivisa().getNombre()).compareTo(ConversorDivisa.convertirDivisa(a.getPrecio(), a.getDivisa().getNombre())));
            return productos;
        }
        return productos;


    }
}
