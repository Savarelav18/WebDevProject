package com.learning.sortilegiosback.service;


import com.learning.sortilegiosback.dto.req.CarritoReqDTO;
import com.learning.sortilegiosback.dto.res.MessageDTO;
import com.learning.sortilegiosback.model.*;
import com.learning.sortilegiosback.repository.ICarritoRepository;
import com.learning.sortilegiosback.repository.IProductoCarritoRepository;
import com.learning.sortilegiosback.repository.IProductoRepository;
import com.learning.sortilegiosback.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarritoService {

    private final ICarritoRepository carritoRepository;
    private final IUsuarioRepository usuarioRepository;
    private final IProductoCarritoRepository productoCarritoRepository;
    private final IProductoRepository productoRepository;

    @Autowired
    public CarritoService(ICarritoRepository carritoRepository, IUsuarioRepository usuarioRepository, IProductoCarritoRepository productoCarritoRepository, IProductoRepository productoRepository) {
        this.carritoRepository = carritoRepository;
        this.usuarioRepository = usuarioRepository;
        this.productoCarritoRepository = productoCarritoRepository;
        this.productoRepository = productoRepository;
    }


    public MessageDTO CreateCarrito(CarritoReqDTO carrito) {
        Usuario usuario = usuarioRepository.findById(carrito.getUsername()).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Long carritoId = carritoRepository.count() + 1;
        Carrito carritoFin = Carrito.builder()
                .id(carritoId)
                .usuario(usuario)
                .build();
        carritoRepository.save(carritoFin);
        carrito.getProductos().stream().map(productoCarrito -> {
            Producto producto = productoRepository.findById(productoCarrito.getId()).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
            if (producto.getStock() < productoCarrito.getCantidad()) {
                throw new RuntimeException("No hay suficiente stock para el producto " + producto.getNombre());
            }
            ProductoCarrito prodCar = ProductoCarrito.builder()
                    .id(ProductoCarritoPKId.builder()
                            .carritoId(carritoId)
                            .productoId(productoCarrito.getId())
                            .build())
                    .producto(producto)
                    .carrito(carritoFin)
                    .cantidad(productoCarrito.getCantidad())
                    .build();
            productoCarritoRepository.save(prodCar);
            return prodCar;
        });
        return MessageDTO.builder().mensaje("Carrito guardado").build();
    }
}
