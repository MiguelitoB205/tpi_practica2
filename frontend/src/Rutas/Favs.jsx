import React, { useContext } from 'react'
import Card from '../components/Card'

import { ContextGlobal } from '../Context/global.context'

const Favs = () => {
    const { state } = useContext(ContextGlobal);
    const favs = state.favs
  return (
    <>
      <h1>Colección favorita</h1>
      <div className='card-grid'>
        {favs?.map((album)=>(
            <Card
            key={album.id}
            id={album.id}
            titulo={album.titulo}
            imagen={album.imagen}/>
        ))}
      </div>
    </>
  )
}

export default Favs
