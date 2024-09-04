import React from 'react'
import {FaFacebook, FaInstagram,FaTiktok, FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <div id='contenedor'>
      <a href='https://www.facebook.com/profile.php?id=100089510108006&locale=es_LA'>
      <div id="caja"><FaFacebook/></div>
      </a>
      <a href='https://www.instagram.com/miguelangelbuitragorico/reels/?next=%2F'>
      <div id="caja"><FaInstagram/></div>
      </a>
      <a href='https://www.tiktok.com/tag/toktok?lang=es'>
      <div id="caja"><FaTiktok/></div>
      </a>
      <a href='https://github.com/MiguelitoB205'>
      <div id="caja"><FaGithub/></div>
      </a>
      
    </div>
  )
}

export default Footer
