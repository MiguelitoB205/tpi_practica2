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
        <Route path='/' element={<App/>}>
        <Route path = '/home' element={<Home/>}/>
        <Route path="/libro/:id" element={<Detalle/>}/>
        <Route path = '/contacto' element={<Contacto/>}/>
        <Route path="/favs" element={<Favs/>}/>
        </Route>
        <Route path="*" element={<h1>Página no encontrada - Error 404</h1>}/>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
)
