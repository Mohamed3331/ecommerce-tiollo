import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../Components/Navbar'
import Bar from '../Components/Bar'
import {ProductContext} from '../context'
import Table from "react-bootstrap/Table";
import CartItem from '../Components/CartItem'

export default class Cart extends Component {
    
  static contextType = ProductContext

     

    render() {
      
    const { cart, clearCart, incrementItem, decrementItem, subTotal, removeItem } = this.context  
    
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
            {cart.map((item) => (
              <CartItem
                key={item.id}
                cartItem={item}
                increment={incrementItem}
                decrement={decrementItem}
                remove={removeItem}
              />
            ))}
            </tbody>
          </table>
        </div>
        <div className="cart-subtotal-price">Subtotal Before Delivery Charges : {subTotal} </div>
        <hr className="cart-subtotal-price-breakline"/> 
        <div  className="cart-subtotal-price-buttons">
          <button onClick={clearCart} className="cart-subtotal-price-clearcart-button">Clear Cart</button>
          <Link style={{textDecoration: 'none'}} to="/checkout"> <button className="cart-subtotal-price-checkout-button"> Checkout </button> </Link>
        </div>

      </>
    );
  }  
}
