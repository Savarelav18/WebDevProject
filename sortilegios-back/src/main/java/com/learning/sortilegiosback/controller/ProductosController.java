package com.learning.sortilegiosback.controller;

import com.learning.sortilegiosback.dto.res.ProductosPreviewDTO;
import com.learning.sortilegiosback.service.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
