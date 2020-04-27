import React from 'react'
import image2 from '../Images/main.webp'
import {Link} from 'react-router-dom'
import NavBar from '../Components/Navbar'
import Bar from '../Components/Bar'
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiOutlineDownSquare } from 'react-icons/ai';
import { AiOutlineUpSquare } from 'react-icons/ai';
import image9 from '../Images/main.webp'

export default function Cart() {
      const styledTD = {
       ["font-size"]: "20px",
       ["font-weight"]: "600"
      }

      const styledRemoveButton = {
       ["margin-left"]: "8px",
      }
    
    return (
      <>
        <NavBar NavWhite="WhiteNav"/>
        <Bar/>

        <div className="cart-container">
          <table class="blueTable">

            <thead>
              <tr>
                <th>Cart Items</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>QTY</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td width="20%"> <img style={{width: '50%', height: '15%'}} src={image9} alt=""/> </td>
                <td width="50%">  MENSWEAR | BERTIE SHORT SLEEVE TEE, GREY</td>
                <td>£44.00</td>
                <td style={styledTD}> <AiOutlineDownSquare className="ArrowDropdownCircle" size={30}/> 1 <AiOutlineUpSquare className="ArrowDropupCircle" size={30}/> </td>
                <td>£44.00 <AiFillMinusCircle  style={styledRemoveButton} size={20}/> </td>
              </tr>
            </tbody>

          </table>
        </div>
      </>
    );
}
