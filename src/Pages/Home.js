import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../Components/Navbar'
import ImageSlider from '../Components/ImageSlider'
import Footer from '../Components/Footer'

export default function Home() {

    return (
        <div>
            <NavBar/>
            <ImageSlider/>
            <Footer/>
        </div>
    )
}
