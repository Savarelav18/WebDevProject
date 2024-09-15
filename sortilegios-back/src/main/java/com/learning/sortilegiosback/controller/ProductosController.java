package com.learning.sortilegiosback.controller;

import com.learning.sortilegiosback.dto.res.ProductoDTO;
import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.service.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
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


    @GetMapping
    public ResponseEntity<List<ProductosPreviewDTO>> getAllProductos(){
        return new ResponseEntity<>(productosService.getAllProductos(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> getProductoById(@PathVariable Long id){
        return new ResponseEntity<>(productosService.getProductoById(id), HttpStatus.OK);
    }
}
