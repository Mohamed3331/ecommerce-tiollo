import React from 'react'
import Slider from '../Components/Slider'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


export default function Footer() {
    return (
        <>
        <div className="footer-container">
          <div>
            <div className="footer-icons-display">
            <a className="bombo" href="/"><FaFacebookF size={18}/></a>
            <a className="bombo" href="/"><FaInstagram size={18}/></a>
            </div>
            <p>INSTAGRAM</p>
            <a href="https://www.instagram.com/tiollohouse/">@TiolloHouse</a>
          </div>
          
          <Slider/>
        </div>
        </>

    )
}

