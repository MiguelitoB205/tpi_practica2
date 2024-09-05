import React, { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { ContextGlobal } from '../Context/global.context';

const Detalle = () => {
    const { id } = useParams();
    const [album, setAlbum ] = useState([]);
    const { isDark } = useContext(ContextGlobal);

    const getAlbum = async () => {
        const res = await fetch("http://localhost:8080/album" + id);
        const data = await res.json();
        setAlbum(data);
    }

    useEffect(()=> {
        getAlbum();
    }, [])
  return (
    <div className={ isDark ? "dark" : ""}>
      <h1>Detalle del álbum { id } </h1>
      <div>{album.artista}</div>
      <div>{album.year}</div>
      <div>{album.genero}</div>
      <div>{album.precio}</div>
    </div>
  )
}

export default Detalle
