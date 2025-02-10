import React from 'react'
import "./component.css"
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function footer() {
  return (
    <div className='footer'>
      <div className="social">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaWhatsapp />
        <FaYoutube />
      </div>
      <div className='name'>
        Frosh Shop
      </div>
    </div>
  )
}

export default footer
