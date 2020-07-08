import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {FaShoppingBag} from 'react-icons/fa'
import $ from "jquery"; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import logo from '../Images/logoo.png'

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      View you Cart
    </Tooltip>
  );
}


export default function Navbar({NavWhite}) {

    const [isOpen, setisOpen] = useState(false);
    const tata = isOpen === true ? "navbar-active" : "";

    useEffect(() => {
      $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar")

            window.addEventListener("scroll", function() {
              $nav.toggleClass('WhiteNav', $(this).scrollTop() > $nav.height())
            })
        })
      })
    })

  return (       
    <>    
      <div className={"navbar " + NavWhite} >
        <div className="logo">
          <a href="/"> <img src={logo} alt=""/> </a>
        </div>

        <div className={"inner-navbar " + tata}>
          <ul className="navlinks">
              <li>TOP CLOTHING
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link style={{textDecoration: 'none'}} to="/tunic">tunic</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/blouse">blouse</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/vest">vest</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/knitwear">knitwear</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/sweatshirt">sweatshirt</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/tshirt">T-shirt</Link></li>
                                </ul>
                            </div>
              </li>
              <li>BOTTOM CLOTHING
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link style={{textDecoration: 'none'}} to="/skirt">skirt</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/trousers">trousers</Link></li>
                                </ul>
                            </div>
              </li>
              <li>HIJAB DRESS
                            <div className="dropdown-links">
                            <ul>
                                <li><Link style={{textDecoration: 'none'}} to="/patterned-dress">patterned dress</Link></li>
                                <li><Link style={{textDecoration: 'none'}} to="/straight-dress">straight dress</Link></li>
                                <li><Link style={{textDecoration: 'none'}} to="/lace-dress">lace dress</Link></li>
                                <li><Link style={{textDecoration: 'none'}} to="/shirt-dress">shirt dress</Link></li>
                            </ul>
                            </div>
              </li>
              <li>OUTERWEAR
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link style={{textDecoration: 'none'}} to="/container">container</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/trencher">trencher</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/coat">coat</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/jacket">jacket</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/kimono">kimono</Link></li>
                                </ul>
                            </div>
              </li>
              <li>FOOTWEAR
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link style={{textDecoration: 'none'}} to="/heels">heels</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/shoes">shoes</Link></li>
                                </ul>
                            </div>
              </li>
              <li>ACCESSORIES
                            <div className="dropdown-links">
                                <ul>
                                    <li><Link style={{textDecoration: 'none'}} to="/belts">belts</Link></li>
                                    <li><Link style={{textDecoration: 'none'}} to="/watches">watches</Link></li>
                                </ul>
                            </div>
              </li>
          </ul>
        </div>

        <div onClick={() => setisOpen(!isOpen) } className={"burger " + tata}>
          <div className="burger-line1"></div>
          <div className="burger-line2"></div>
          <div className="burger-line3"></div>
        </div>

        <div className="cart-icon-icon-container"> <Link to="/cart">
            <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
            >
      
          <FaShoppingBag  color="black" size={25}/>
        </OverlayTrigger>
         
         
        </Link> </div>
      </div>
    </>    
  )
}

