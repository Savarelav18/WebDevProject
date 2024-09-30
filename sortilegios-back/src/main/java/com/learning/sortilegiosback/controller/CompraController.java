package com.learning.sortilegiosback.controller;

import com.learning.sortilegiosback.dto.req.CompraReqDTO;
import com.learning.sortilegiosback.service.CompraService;
import com.learning.sortilegiosback.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/compra")
public class CompraController {
    private final CompraService compraService;

    public CompraController(CompraService compraService) {
        this.compraService = compraService;
    }

    @PostMapping
    public ResponseEntity<?> createCompra(@RequestBody CompraReqDTO username){
        return new ResponseEntity<>(compraService.createCompra(username), HttpStatus.OK);
    }

    @PostMapping("/all")
    public ResponseEntity<?> getAllCompras(@RequestBody CompraReqDTO username){
        return new ResponseEntity<>(compraService.getAllCompras(username), HttpStatus.OK);
    }
}
