package com.learning.sortilegiosback.controller;


import com.learning.sortilegiosback.dto.req.CarritoReqDTO;
import com.learning.sortilegiosback.dto.res.MessageDTO;
import com.learning.sortilegiosback.model.Carrito;
import com.learning.sortilegiosback.service.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/api/carritos")
public class CarritoController {
    private final CarritoService carritoService;

    @Autowired
    public CarritoController(CarritoService carritoService) {
        this.carritoService = carritoService;
    }

    @PostMapping
    public ResponseEntity<MessageDTO> CreateCarrito(@RequestBody CarritoReqDTO carrito) {
        return ResponseEntity.ok(carritoService.CreateCarrito(carrito));
    }
}
