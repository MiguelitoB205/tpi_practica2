import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from "./Rutas/Home"
import Detalle from "./Rutas/Detalle"
import Contacto from './Rutas/Contacto';
import ContextProvider from './Context/global.context';
import Favs from './Rutas/Favs'

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
)
