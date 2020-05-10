import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../Components/Navbar'
import Jumptron from '../Components/Jumptron'
import Footer from '../Components/Footer'

export default function Home() {

    return (
        <div>
            <NavBar/>
            <Jumptron/>
            <Footer/>
        </div>
    )
}
