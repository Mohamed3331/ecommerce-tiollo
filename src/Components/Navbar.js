import React, { Component } from 'react'


export default class Navbar extends Component {
    render() {
        return (
            
            <div id="main">
            <nav className="soso">
                <div className="logo">
                    <h4>Tiollo</h4>
                </div>
            
                <ul className="nav-links">
                    <li className="active"><a href="">New <p className="down"></p> </a>
                        <div className="dropdown-links">
                            <ul>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Women</a></li>
                            </ul>
                        </div>
                    </li> 
                    <li className="active"><a href="#">Women</a>  <p className="down"></p> 
                        <div className="dropdown-links">
                            <ul>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Coats  Jackets</a></li>
                                <li><a href="#">Sweatshirts</a></li>
                                <li><a href="#">Knitwear</a></li>
                                <li><a href="#">Shoes Heels</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="active"><a href="#">Men</a>  <p className="down"></p> 
                        <div className="dropdown-links">
                            <ul>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Legwear</a></li>
                                <li><a href="#">Sweatshirts</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Sweatshirts</a></li>
                                <li><a href="#">Footwear</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="active"><a href="#">Accessories</a> <p className="down"></p>
                        <div className="dropdown-links">
                            <ul>
                                <li className="hover-me"><a href="#">Men</a><li className="fa fa-angle-right"></li>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li><a href="">fsdds</a></li>
                                            <li><a href="">fdsfds</a></li>
                                            <li><a href="">fsdfdsfdsfds</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">Women</a><li className="fa fa-angle-right"></li>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li><a href="">fsdds</a></li>
                                            <li><a href="">fdsfds</a></li>
                                            <li><a href="">fsdfdsfdsfds</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="active"><a href="#">Fashion</a> <p className="down"></p>
                        <div className="dropdown-links">
                            <ul>
                                <li><a href="#">Tops</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div> 
                </div>
            </nav>
        </div>
         
        )
    }
}

