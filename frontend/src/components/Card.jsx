import React, { useContext} from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal} from "../Context/global.context"

const Card = ({id, titulo, imagen, addFav }) =>{
    const { state: { isDark },} = useContext(ContextGlobal);

return(
    <div className={ isDark ? "dark" : ""}>
        <div className='card'>
            <Link to={`/album/${id}`}>
            <h2 className={ isDark ? "dark" : ""}>{titulo}</h2><br />
            <img src={imagen} width="150px" height="150px" />
            </Link>
            <button onClick={addFav} className='favButton'>Me encanta</button>
        </div>
    </div>
)
}
export default Card;