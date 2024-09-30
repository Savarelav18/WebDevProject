package com.learning.sortilegiosback.controller;

import com.learning.sortilegiosback.dto.res.MessageDTO;
import com.learning.sortilegiosback.dto.res.ProductoDTO;
import com.learning.sortilegiosback.dto.res.ProductoUpdateDTO;
import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.model.Producto;
import com.learning.sortilegiosback.service.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/productos")
public class ProductosController {

    @Autowired
    private ProductosService productosService;


    @GetMapping()
    public ResponseEntity<List<ProductosPreviewDTO>> getAllProductos(@RequestParam(required = false, defaultValue = "none")  String order,
                                                                     @RequestParam(required = false, defaultValue = "none")  String filter) {
        return new ResponseEntity<>(productosService.getAllProductos(order, filter), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> getProductoById(@PathVariable Long id){
        return new ResponseEntity<>(productosService.getProductoById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<MessageDTO> crearProducto(@RequestBody ProductoUpdateDTO productoDTO) {
        MessageDTO nuevoProducto = productosService.crearProducto(productoDTO);
        return new ResponseEntity<>(nuevoProducto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<MessageDTO> updateProducto(
            @PathVariable Long id,
            @RequestBody ProductoDTO productoDTO) {

        return new ResponseEntity<>(productosService.updateProductoParcial(id, productoDTO), HttpStatus.OK);
    }
}
