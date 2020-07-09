import React, {useEffect} from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiOutlineDownSquare } from 'react-icons/ai';
import { AiOutlineUpSquare } from 'react-icons/ai';
import {Link} from 'react-router-dom'

export default function CartItem({cartItem,increment,decrement,remove,getTotals}) {
    const { id, slug, price, count, name, images, totalPrice, size } = cartItem
    
    const styledTD = {
       fontSize: "20px",
       fontWeight: "600"
      }

      const styledRemoveButton = {
        cursor: "pointer",
        float: 'right'
      }

      useEffect(() => getTotals, [getTotals]);

    return (
        <>
            <tr>
                <td width="20%">  <Link to={`/${slug}/${id}`}> <img className="image-td-cartItem" style={{width: '100%', height: 'auto'}} src={images[0]} alt=""/> </Link> </td>
                <td width="50%">{`${name} | ${size.map((item) => item.label )} `}</td>
                <td>${price}</td>
                <td style={styledTD}> <AiOutlineDownSquare onClick={() => decrement(id)} className="ArrowDropdownCircle" size={30}/> {count} <AiOutlineUpSquare onClick={() => increment(id)} className="ArrowDropupCircle" size={30}/> </td>
                <td>${totalPrice} <AiFillMinusCircle  onClick={() => remove(id)} style={styledRemoveButton} size={22}/> </td>
            </tr>

            {/* <section className="cart-cartitem-container-mobile">
            <div className="cart-cartitem-mobile-item-container">
              <img src={images[0]} alt=""/>
              <div className="cart-cartitem-mobile-name"> {name} </div>
              <div className="cart-cartitem-mobile-size">size: <span>{size.map((item) => item.label )}</span> </div>
            </div>
              <div className="cart-cartitem-mobile-price">Price: <span>${price}</span> </div>
              <div className="cart-cartitem-mobile-quantity"> <AiOutlineDownSquare onClick={() => decrement(id)} className="ArrowDropdownCircle" size={30}/> Quantity: <span> {count} </span> <AiOutlineUpSquare onClick={() => increment(id)} className="ArrowDropupCircle" size={30}/> </div>
              <div className="cart-cartitem-mobile-total"> Total: <span>${totalPrice}</span> <AiFillMinusCircle  onClick={() => remove(id)} style={styledRemoveButton} size={22}/> </div>
          </section> */}
        </>
    )
}


