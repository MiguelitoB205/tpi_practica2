package com.example.backend.Controller;

import com.example.backend.Model.Album;
import com.example.backend.Service.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/album")
public class AlbumController {

    @Autowired

    private AlbumService albumService;

    @GetMapping
    public List<Album> getAlbumes(){
        return albumService.getAlbumes();
    }

    @PostMapping
    public Album saveAlbum(@RequestBody Album album){
        return this.albumService.saveAlbum(album);
    }

    @GetMapping(path = "/{id}")
    public Optional<Album> getAlbumById(@PathVariable("id") Long id){
        return this.albumService.getById(id);
    }

    @PutMapping(path = "/{id}")
    public Album updateAlbumById(@RequestBody Album request, @PathVariable("id") Long id){
        return this.albumService.updateById(request, id);
    }
    @DeleteMapping(path= "/{id}")
    public String deleteById(@PathVariable("id") Long id){
        boolean ok = this.albumService.deleteAlbum(id);

        if(ok){
            return "Album con id " + id + "eliminado";
        } else {
            return "Error, por favor inténtalo de nuevo";
        }
    }
}
