package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.dto.req.ComentarioReqDTO;
import com.learning.sortilegiosback.dto.req.CompraReqDTO;
import com.learning.sortilegiosback.dto.res.ComentarioDTO;
import com.learning.sortilegiosback.dto.res.CompraResDTO;
import com.learning.sortilegiosback.dto.res.MessageDTO;
import com.learning.sortilegiosback.dto.res.ProductoDTO;
import com.learning.sortilegiosback.model.*;
import com.learning.sortilegiosback.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraService {
    private final IProductoRepository productoRepository;
    private final ICarritoRepository carritoRepository;
    private final ICompraRepository compraRepository;
    private final IProductoCarritoRepository productoCarritoRepository;
    private final IUsuarioRepository usuarioRepository;
    private final IImagenRepository imagenRepository;
    private final IResenaRepository resenaRepository;

    public CompraService(IProductoRepository productoRepository, ICarritoRepository carritoRepository, ICompraRepository compraRepository, IProductoCarritoRepository productoCarritoRepository, IUsuarioRepository usuarioRepository, IImagenRepository imagenRepository, IResenaRepository resenaRepository) {
        this.productoRepository = productoRepository;
        this.carritoRepository = carritoRepository;
        this.compraRepository = compraRepository;
        this.productoCarritoRepository = productoCarritoRepository;
        this.usuarioRepository = usuarioRepository;
        this.imagenRepository = imagenRepository;
        this.resenaRepository = resenaRepository;
    }

    public List<CompraResDTO> getAllCompras(CompraReqDTO compraReqDTO){
        usuarioRepository.findById(compraReqDTO.getUsername()).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        return compraRepository.findByUsuarioUsername(compraReqDTO.getUsername()).stream().map(compra -> {
            return CompraResDTO.builder()
                    .direccion(compra.getDireccion())
                    .total(compra.getTotal())
                    .productos(compra.getCarrito().getProductosCarrito().stream().map( productoCarrito -> {
                        Producto producto = productoRepository.findById(productoCarrito.getId().getProductoId()).get();
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

                    ).toList()).build();
        }).toList();


    }

    public MessageDTO createCompra(CompraReqDTO compraReqDTO){

        Usuario usuario = usuarioRepository.findById(compraReqDTO.getUsername()).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Carrito ultimoCarrito = carritoRepository.findAllByUsuarioUsername(compraReqDTO.getUsername()).stream().max((o1, o2) -> o1.getId().compareTo(o2.getId())).get();

        productoCarritoRepository.findByCarritoId(ultimoCarrito.getId()).forEach(productoCarrito -> {
            productoCarrito.getProducto().setStock(productoCarrito.getProducto().getStock() - productoCarrito.getCantidad());
            productoRepository.save(productoCarrito.getProducto());
        });
        Double total = productoCarritoRepository.findByCarritoId(ultimoCarrito.getId()).stream().mapToDouble(productoCarrito -> productoCarrito.getProducto().getPrecio() * productoCarrito.getCantidad()).sum();

        Compra compra = Compra.builder()
                .carrito(ultimoCarrito)
                .usuario(usuario)
                .total(total)
                .direccion(compraReqDTO.getDireccion())
                .build();
        compraRepository.save(compra);
        return new MessageDTO("Compra realizada con éxito");
    }
    private Double getPromedioCalificacion(Long productoId){
        List<Resena> listaResena = resenaRepository.findByProductoId(productoId);
        return listaResena.stream().map(Resena::getCalificacion).reduce(Double::sum).orElse(0.0) / listaResena.size();
    }
}
