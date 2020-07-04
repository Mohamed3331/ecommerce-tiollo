import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiOutlineDownSquare } from "react-icons/ai";
import { AiOutlineUpSquare } from "react-icons/ai";
// import { Link } from "react-router-dom";

export default function CartItemMobile({ cartItem, increment, decrement, remove }) {
  const { id, price, count, name, images, totalPrice, size } = cartItem;

  const styledRemoveButton = {
    cursor: "pointer",
    float: "right",
  };

  return (
    <>

      <section className="cart-cartitem-container-mobile">
            <div className="cart-cartitem-mobile-item-container">
              <img src={images[0]} alt=""/>
              <div className="cart-cartitem-mobile-name"> {name} </div>
              <div className="cart-cartitem-mobile-size">size: <span> {size.length > 0 ? size.map((item) => item.label ) : <span> Please choose Size </span>} </span> </div>
            </div>
              <div className="cart-cartitem-mobile-price">Price: <span>${price}</span> </div>
              <div className="cart-cartitem-mobile-quantity"> Quantity: <AiOutlineDownSquare onClick={() => decrement(id)} className="ArrowDropdownCircle" size={30}/> <span> {count} </span> <AiOutlineUpSquare onClick={() => increment(id)} className="ArrowDropupCircle" size={30}/> </div>
              <div className="cart-cartitem-mobile-total"> Total: <span>${totalPrice}</span> <AiFillMinusCircle  onClick={() => remove(id)} style={styledRemoveButton} size={22}/> </div>
          </section>
    </>
  );
}
