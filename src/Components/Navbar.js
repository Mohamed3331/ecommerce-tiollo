import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {FaShoppingBag} from 'react-icons/fa'
import $ from "jquery"; 
import SideCart from './SideCart'

export default function Navbar({NavWhite}) {
    const [isOpen, setStatus] = useState(false)

    const tata = isOpen === true ? "active-cart" : ""

    useEffect(() => {
      $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar")

            window.addEventListener("scroll", function() {
                           $nav.toggleClass('WhiteNav', $(this).scrollTop() > $nav.height())
                        })

          // if(window.pageYOffset > 0) {
          //     $nav.toggleClass('WhiteNav')
          //   } else {
          //   $nav.toggleClass("transparentNav")
          //   }
        })
      })
    })

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
      <div className={"navbar " + NavWhite} >
        <div className="logo">
          <a href="">Tiollo</a>
        </div>

        <div className="inner-navbar">
          <ul className="navlinks">
              <li>TOP CLOTHING
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
              <li>BOTTOM CLOTHING
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/skirt">skirt</Link></li>
                                    <li><Link to="/trousers">trousers</Link></li>
                                </ul>
                            </div>
              </li>
              <li>HIJAB DRESS
                            <div className="dropdown-links">
                            <ul>
                                <li><Link to="/patterned-dress">patterned dress</Link></li>
                                <li><Link to="/straight-dress">straight dress</Link></li>
                                <li><Link to="/lace-dress">lace dress</Link></li>
                                <li><Link to="/shirt-dress">shirt dress</Link></li>
                            </ul>
                            </div>
              </li>
              <li>OUTERWEAR
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
              <li>FOOTWEAR
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/heels">heels</Link></li>
                                    <li><Link to="/shoes">shoes</Link></li>
                                </ul>
                            </div>
              </li>
              <li>ACCESSORIES
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link to="/belts">belts</Link></li>
                                    <li><Link to="/watches">watches</Link></li>
                                </ul>
                            </div>
              </li>
            </ul>
        </div>

        <div className="cart-icon-icon-container"> <Link to="/cart"> <FaShoppingBag color="black" size={22}/> Cart 3 </Link> </div>
        {/* <SideCart isOpen={tata}/> */}
        {/* onClick={() => setStatus(!isOpen)} */}
      </div>
    </>    
  )
}










{/*
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