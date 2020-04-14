import React from 'react'
import {Link} from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi';
import { IoIosCart } from 'react-icons/io';

export default function Navbar(props) {
  
    return (           
            <div id="main">
            <nav className="soso">
                <div className="logo">
                    <Link style={{ color: 'rgb(32, 32, 32)' }} to='/'>Tiollo</Link>
                </div>
            
                <ul className="nav-links">
                    <li> Women <FiChevronDown className="down-icon"/>
                        <div className="dropdown-links">
                            <ul>
                                <li><Link style={{ color: 'black' }} to='/tops/'>Tops</Link></li>
                                <li><Link style={{ color: 'black' }} to='/dresses/'>dresses</Link></li>
                                <li><Link style={{ color: 'black' }} to='/coats/'>coats</Link></li>
                                <li><Link style={{ color: 'black' }} to='/sweatshirts-2/'>sweatshirts</Link></li>
                                <li><Link style={{ color: 'black' }} to='/knitwear-2/'>knitwear</Link></li>
                                <li><Link style={{ color: 'black' }} to='/footwear-2/'>footwear</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li> Men <FiChevronDown className="down-icon"/> 
                        <div className="dropdown-links">
                            <ul>
                                <li><Link style={{ color: 'black' }} to='/tops/'>Tops</Link></li>
                                <li><Link style={{ color: 'black' }} to='/tees/'>tees</Link></li>
                                <li><Link style={{ color: 'black' }} to='/legwear/'>legwear</Link></li>
                                <li><Link style={{ color: 'black' }} to='/sweatshirts-1/'>sweatshirts</Link></li>
                                <li><Link style={{ color: 'black' }} to='/shirts-1/'>shirts</Link></li>
                                <li><Link style={{ color: 'black' }} to='/footwear-1/'>Tops</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li> Accessories <FiChevronDown className="down-icon"/>
                        <div className="dropdown-links">
                            <ul>
                                <li class="hover-me"><Link style={{ color: 'black' }} to='/men/'>Men</Link><div className="fa fa-angle-right"></div>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={{ color: 'black' }}>soso</li>
                                            <li style={{ color: 'black' }}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="hover-me"><Link style={{ color: 'black' }} to='/men/'>Women</Link><div className="fa fa-angle-right"></div>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={{ color: 'black' }}>soso</li>
                                            <li style={{ color: 'black' }}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                     <li> Fashion <FiChevronDown className="down-icon"/>
                        <div className="dropdown-links">
                            <ul>
                                <li class="hover-me"><Link style={{ color: 'black' }} to='/men/'>Men</Link><div className="fa fa-angle-right"></div>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={{ color: 'black' }}>soso</li>
                                            <li style={{ color: 'black' }}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="hover-me"><Link style={{ color: 'black' }} to='/men/'>Women</Link><div className="fa fa-angle-right"></div>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={{ color: 'black' }}>soso</li>
                                            <li style={{ color: 'black' }}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li> 
                </ul>

                <div className="sign-in">SIGN IN</div>

                <div className="my-cart-b">
               MY CARffdT (5)
                </div>

                <div className="cart">
                    <IoIosCart size={30}/>
                </div>
                
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div> 
                </div>
            </nav>
        </div>
         
    )
}

