import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { IoIosCart } from 'react-icons/io';
import image15 from '../Images/main.webp'


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
            <div className={"navbar " + props.NavWhite} >
                <div className="logo">
                    <a href="">Tiollo</a>
                </div>

                <div className="inner-navbar">
                    <ul className="navlinks">
                        <li><a href="">TOP CLOTHING</a>
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/shirts">tunic</Link></li>
                                    <li><Link to="/blouse">blouse</Link></li>
                                    <li><Link to="/vest">vest</Link></li>
                                    <li><Link to="/knitwear">knitwear</Link></li>
                                    <li><Link to="/sweatshirt">sweatshirt</Link></li>
                                    <li><Link to="/tshirt">T-shirt</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">BOTTOM CLOTHING</a>
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/skirt">skirt</Link></li>
                                    <li><Link to="/trousers">trousers</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">HIJAB DRESS</a>
                            <div className="dropdown-links">
                            <ul>
                                <li><Link to="/patterned-dress">patterned dress</Link></li>
                                <li><Link to="/straight-dress">straight dress</Link></li>
                                <li><Link to="/lace-dress">lace dress</Link></li>
                                <li><Link to="/shirt-dress">shirt dress</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li><a href="">OUTERWEAR</a>
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/container">container</Link></li>
                                    <li><Link to="/trencher">trencher</Link></li>
                                    <li><Link to="/coat">coat</Link></li>
                                    <li><Link to="/jacket">jacket</Link></li>
                                    <li><Link to="/kimono">kimono</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">FOOTWEAR</a>
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/heels">heels</Link></li>
                                    <li><Link to="/shoes">shoes</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="">ACCESSORIES</a>
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/belts">belts</Link></li>
                                    <li><Link to="/watches">watches</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            

                {/* <div className="sign-in"><a href="/Login"> SIGN IN </a></div>
    
                <button type="" onClick={() => setStatus(!isOpen)} className="cart-icon-icon"> <IoIosCart size={30}/></button> */}
              

                {/* <div className={'menu-cart ' + tata}>

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
                
                
                
                      <script >
                        window.addEventListener("scroll", function() {
                            let navbar = document.getElementById('navbar')
                            if(window.pageYOffset > 0) {
                            navbar.classList.add("white");
                            } else {
                            navbar.classList.remove("white")
                            }
                        })
                        </script>
                
                */}
    
        </>    
    )
}

 