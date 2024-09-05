import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../Context/global.context'

const Navbar = () => {
    const {
        dispatch,
        state: { isDark },
    } = useContext(ContextGlobal)
  return (
    <nav>
      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/favs'>
        <button >Favs</button>
      </Link>
      <Link to='/contacto'>
        <button>Contact</button>
      </Link>
      <button onClick={()=>dispatch({type: "toggle_theme"})}>Change theme</button>
    </nav>
  )
}

export default Navbar
