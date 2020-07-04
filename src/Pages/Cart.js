import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../Components/Navbar'
// import Bar from '../Components/Bar'
import {ProductContext} from '../context'
import CartItem from '../Components/CartItem'
import CartItemMobile from '../Components/CartItemMobile'

export default class Cart extends Component {
    
  static contextType = ProductContext

     

    render() {
      
    const { cart, clearCart, incrementItem, decrementItem, subTotal, removeItem } = this.context  
    
    return (
      <>
        <NavBar NavWhite="WhiteNav"/>
        {/* <Bar/> */}

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

        </div>
        <div className="cart-subtotal-price">Subtotal Before Delivery Charges : {subTotal} </div>
        <hr className="cart-subtotal-price-breakline"/> 
        <div  className="cart-subtotal-price-buttons">
          <button onClick={clearCart} className="cart-subtotal-price-clearcart-button">Clear Cart</button>
          <Link style={{textDecoration: 'none'}} to="/checkout"> <button className="cart-subtotal-price-checkout-button"> Checkout </button> </Link>
        </div>

        <div className="cart-container-mobile">

           { cart.map((item) => (
              <CartItemMobile
                key={item.id}
                cartItem={item}
                increment={incrementItem}
                decrement={decrementItem}
                remove={removeItem}
              />
            )) }
          
          <div className="cart-cartitem-mobile-subtotal-container">
            <div className="cart-cartitem-mobile-subtotal">Subtotal before Delivery Charges: <span>30$</span></div>
            <div className="cart-cartitem-mobile-coupon">Coupon Code: <span>Add Coupon</span> </div>
          </div>

          <div className="cart-cartitem-mobile-buttons-container">
          <Link style={{color: "white"}} to="/checkout"> <button className="cart-subtotal-price-checkout-button-mobile"> Checkout </button> </Link>
            <button className="cart-subtotal-price-clearcart-button-mobile">Clear cart</button>
          </div>

        </div>

      </>
    );
  }  
}
