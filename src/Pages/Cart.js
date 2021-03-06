import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../Components/Navbar'
import {ProductContext} from '../context'
import CartItem from '../Components/CartItem'
import CartItemMobile from '../Components/CartItemMobile'

export default class Cart extends Component {

  static contextType = ProductContext

    render() {
      
    const { cart, clearCart, incrementItem, decrementItem, subTotal, removeItem } = this.context  

    return (
      <>
        
        <NavBar NavWhite="NavResp"/>

        <div className="cart-container">
          <table className="blueTable">

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
            { cart.map((item) => (
              <CartItem
                key={item.id}
                cartItem={item}
                increment={incrementItem}
                decrement={decrementItem}
                remove={removeItem}
              />
            )) }
            </tbody>
          </table>

          <img src="" alt=""/>

        </div>
        <div className="cart-subtotal-price">Subtotal Before Delivery Charges : {subTotal} </div>
        <hr className="cart-subtotal-price-breakline"/> 
        <div className="cart-subtotal-price-buttons">
          <button onClick={clearCart} className="cart-subtotal-price-clearcart-button">Clear Cart</button>
          <Link style={{textDecoration: 'none'}} to="/checkout"> <button className="cart-subtotal-price-checkout-button"> Checkout </button> </Link>
        </div>

        

        <div className="cart-container-mobile">

           { cart.length > 0 ? cart.map((item) => (
              <CartItemMobile
                key={item.id}
                cartItem={item}
                increment={incrementItem}
                decrement={decrementItem}
                remove={removeItem}
              />
            )) : 'Your Cart Is Empty' }
          
          <div className="cart-cartitem-mobile-subtotal-container">
            <div className="cart-cartitem-mobile-subtotal">Subtotal before Delivery Charges: <span>E£{subTotal}</span></div>
            <div className="cart-cartitem-mobile-coupon">Coupon Code: <span>Add Coupon</span> </div>
          </div>

          <div className="cart-cartitem-mobile-buttons-container">
          <Link style={{color: "white"}} to="/checkout"> <button className="cart-subtotal-price-checkout-button-mobile"> Checkout </button> </Link>
            <button onClick={clearCart} className="cart-subtotal-price-clearcart-button-mobile">Clear cart</button>
          </div>

        </div>

      </>
    );
  }  
}
