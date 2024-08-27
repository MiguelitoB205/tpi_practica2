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

    public Album() {
    }

    public Album(Long id, String titulo, String imagen, String artista, Integer year, String genero, Double precio) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.artista = artista;
        this.year = year;
        this.genero = genero;
        this.precio = precio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
