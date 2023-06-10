import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {

  return (
   <React.Fragment>
<div className="footer container">
     <div className="footer-section">
        <p className="footer-title">Foodathon.com</p>
        <p>Foodathon is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
        <p>&copy; 2021 | All Rights Reserved</p>
     </div>
     <div className="footer-section">
        <p className="footer-title">Contact Us</p>
        <p>Foodathon@gmail.com</p>
       <p>+999-8910-9182</p>
       <p>2381 Street CA</p>
     </div>
     <div className="footer-section">
        <p className="footer-title">Socials</p>
        <p><FaFacebook style={{color:"white"}}/> Facebook</p>
        <p><FaTwitter/> Twitter</p>
        <p><FaInstagram/>  Instagram</p>
             </div>
</div>
   </React.Fragment>
  )
}

export default Footer