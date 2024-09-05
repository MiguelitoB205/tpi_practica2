import React, { useContext } from 'react'
import Card from '../components/Card'
import { ContextGlobal  } from '../Context/global.context'


const Home = () => {
    const {
        albumes,
        dispatch,
        state: { isDark },
    } = useContext(ContextGlobal)
  return (
    <main className={ isDark ? "dark" : ""}>
      <h1>Home</h1>
      <div className='card-grid'>
        {albumes?.map((album)=>(
            <Card
            key={album.id}
            id={album.id}
            titulo={album.id}
            imagen={album.imagen}
            addFav= {() => dispatch({type: "add_fav", payload: album})}
            />
        ))}
      </div>
    </main>
  )
}

export default Home
