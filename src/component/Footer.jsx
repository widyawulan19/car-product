import React from 'react'
import '../style/FooterStyle.css'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <p>Vesla <FaRegCopyright size={10}/> 2024 </p>
        <p>Privacy & Legal</p>
        <p>Vehicle Recalls </p>
        <p>Contact</p>
        <p>News</p>
        <p>Get Updates</p>
        <p>Locations</p>
    </div>
  )
}

export default Footer