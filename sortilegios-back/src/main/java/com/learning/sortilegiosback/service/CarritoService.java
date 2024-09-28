package com.learning.sortilegiosback.service;


import com.learning.sortilegiosback.model.Carrito;
import com.learning.sortilegiosback.repository.ICarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarritoService {

    private final ICarritoRepository carritoRepository;

    @Autowired
    public CarritoService(ICarritoRepository carritoRepository) {
        this.carritoRepository = carritoRepository;
    }

    public List<Carrito> getAllCarritos() {
        return carritoRepository.findAll();
    }

    public Optional<Carrito> getCarritoById(Long id) {
        return carritoRepository.findById(id);
    }

    public Carrito createCarrito(Carrito carrito) {
        return carritoRepository.save(carrito);
    }

    public Carrito updateCarrito(Long id, Carrito carritoDetails) {
        return carritoRepository.findById(id)
                .map(carrito -> {
                    carrito.setCompra(carritoDetails.getCompra());
                    carrito.setProductosCarrito(carritoDetails.getProductosCarrito());
                    carrito.setUsuario(carritoDetails.getUsuario());
                    return carritoRepository.save(carrito);
                })
                .orElseThrow(() -> new IllegalArgumentException("Carrito no encontrado con id: " + id));
    }

    public void deleteCarrito(Long id) {
        carritoRepository.deleteById(id);
    }
}
