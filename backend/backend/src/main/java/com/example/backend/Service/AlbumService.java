package com.example.backend.Service;

import com.example.backend.Model.Album;
import com.example.backend.Repository.AlbumRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class AlbumService {
    @Autowired
    AlbumRepository albumRepository;

    public List<Album> getAlbumes(){
        return (List<Album>) albumRepository.findAll();
    }
    public Album saveAlbum(Album album) { return albumRepository.save(album); }
    public Optional<Album> getById(Long id) {
        return albumRepository.findById(id);
    }
    public Album updateById(Album request, Long id){
        Album album = albumRepository.findById(id).get();
        album.setTitulo(request.getTitulo());
        album.setImagen(request.getImagen());
        album.setArtista(request.getArtista());
        album.setGenero(request.getGenero());
        album.setYear(request.getYear());
        album.setPrecio(request.getPrecio());

        return album;
    }

}
