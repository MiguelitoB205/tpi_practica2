package com.example.backend.Model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "album")
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    @Column(name="titulo")
    private String titulo;
    @Column (name="imagen")
    private String imagen;
    @Column (name="artista")
    private String artista;
    @Column (name="year")
    private Integer year;
    @Column (name="genero")
    private String genero;
    @Column (name="precio")
    private Double precio;

}
