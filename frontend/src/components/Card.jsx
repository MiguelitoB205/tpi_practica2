import React, { useContext} from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal} from "../Context/global.context"

const Card = ({id, titulo, imagen }) =>{
    const { state: { isDark },} = useContext(ContextGlobal);

return(
    <div className={ isDark ? "dark" : ""}>
        <div className='card'>
            
        </div>
    </div>
)
}