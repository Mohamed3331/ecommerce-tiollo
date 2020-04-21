import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { IoIosCart } from 'react-icons/io';
import image9 from '../Images/main.webp'



export default function Navbar(props) {
    const [isOpen, setStatus] = useState(false)
    
    const tata = isOpen === true ? "active-cart" : ""

    const styledLink = {
        ['text-decoration']: 'none',
        ['color']: 'black'
    }

    const styledProductText= {
        ['transform']:  'translateY(15px)',
        ['margin-left']: '20px',
        ['margin-bottom']: '20px',
        ['font-size']: '14px'
    }

    const styledProductPrice= {
        ['transform']:  'translateY(15px)',
        ['font-size']: '14px'
    }

    return (       
        <>    
            <div id="main">
            <nav className={props.NavWhite}>
                <div className="logo">
                    <Link style={styledLink} to='/'>Tiollo</Link>
                </div>
            
                <ul className="nav-links">
                    <li> Women <FiChevronDown className="down-icon"/>
                        <div className="dropdown-links">
                            <ul>
                                <li><Link style={styledLink} to='/tops/'>Tops</Link></li>
                                <li><Link style={styledLink} to='/dresses/'>dresses</Link></li>
                                <li><Link style={styledLink} to='/coats/'>coats</Link></li>
                                <li><Link style={styledLink} to='/sweatshirts/'>sweatshirts</Link></li>
                                <li><Link style={styledLink} to='/knitwear/'>knitwear</Link></li>
                                <li><Link style={styledLink} to='/footwear/'>footwear</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li> Men <FiChevronDown className="down-icon"/> 
                        <div className="dropdown-links">
                            <ul>
                                <li><Link style={styledLink} to='/tops/'>Tops</Link></li>
                                <li><Link style={styledLink} to='/tees/'>tees</Link></li>
                                <li><Link style={styledLink} to='/legwear/'>legwear</Link></li>
                                <li><Link style={styledLink} to='/sweatshirts/'>sweatshirts</Link></li>
                                <li><Link style={styledLink} to='/shirts/'>shirts</Link></li>
                                <li><Link style={styledLink} to='/footwear/'>Tops</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li> Accessories <FiChevronDown className="down-icon"/>
                        <div className="dropdown-links">
                            <ul>
                                <li className="hover-me"><Link style={styledLink} to='/men/'>Men</Link> <FiChevronRight/>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={styledLink}>soso</li>
                                            <li style={styledLink}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><Link style={styledLink} to='/men/'>Women</Link> <FiChevronRight/>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={styledLink}>soso</li>
                                            <li style={styledLink}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                     <li> Fashion <FiChevronDown className="down-icon"/>
                        <div className="dropdown-links">
                            <ul>
                                <li className="hover-me"><Link style={{ color: 'black' }} to='/men/'>Men</Link> <FiChevronRight/>
                                    <div className="dropdown-down-links">
                                        <ul>
                                            <li style={{ color: 'black' }}>soso</li>
                                            <li style={{ color: 'black' }}  >lolo</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><Link style={{ color: 'black' }} to='/men/'>Women</Link> <FiChevronRight/>
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

                <div className="sign-in"><a href="/Login"> SIGN IN </a></div>
    
                <button type="" onClick={() => setStatus(!isOpen)} className="cart-icon-icon"> <IoIosCart size={30}/></button>
              

                <div className={'menu-cart ' + tata}>

                    <div className="cart-item-container">
                        <img style={{width: '25%', height: '100%'}} src={image9} alt=""/>
                            <div style={styledProductText}>MEN-TAYLOR BRAND
                                <div style={styledProductPrice}>50%</div>
                            </div>   
                    </div>
                    <hr/>
                     <div className="cart-item-container">
                        <img style={{width: '25%', height: '100%'}} src={image9} alt=""/>
                            <div style={styledProductText}>MEN-TAYLOR BRAND
                                <div style={styledProductPrice}>50%</div>
                            </div>   
                    </div>
                    <hr/>
   
                    <div className="cart-buttons">
                        <div className="bt11"> <a href="/checkout">CheckOut</a></div>
                        <div className="bt22"><a href="/cart">View Cart</a></div>
                    </div>
                </div>
                
            </nav>
        </div>
    
        </>    
    )
}

 