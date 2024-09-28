package com.learning.sortilegiosback.service;

import com.learning.sortilegiosback.model.Usuario;
import com.learning.sortilegiosback.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final IUsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(IUsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    // Obtener todos los usuarios
    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }

    // Obtener un usuario por su username
    public Optional<Usuario> obtenerPorUsername(String username) {
        return usuarioRepository.findById(username);
    }

    // Crear o actualizar un usuario
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Eliminar un usuario por su username
    public void eliminarUsuario(String username) {
        usuarioRepository.deleteById(username);
    }

    // Obtener un usuario por su email
    public Optional<Usuario> obtenerPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }
}
