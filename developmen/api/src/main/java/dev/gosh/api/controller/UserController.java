package dev.gosh.api.controller;

import dev.gosh.api.model.User;
import dev.gosh.api.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        // Validación manual básica
        System.out.println("llego peticion");
        if (user.getName() == null || user.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Name is required");

        }
        System.out.println("llego el nombre");

        if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");

        }
        System.out.println("llego el email");

        if (user.getPassword() == null || user.getPassword().length() < 6) {
            return ResponseEntity.badRequest().body("Password must be at least 6 characters");
        }
        System.out.println("llego el password");

        try {
            User createdUser = userService.createUser(user);
            System.out.println("se creo el usuario");
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            System.out.println("No se creo el usuario");
            return ResponseEntity.internalServerError().body("Error creating user: " + e.getMessage());
        }
    }

    @GetMapping
    public List<User> getAllUsers() {
        System.out.println("peticion");
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        System.out.println("numerito");
        System.out.println(id);
        User user = userService.getUserById(id);
        var res = user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
        System.out.println(res.toString());
        return res;
    }

}