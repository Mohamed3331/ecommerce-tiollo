import React, { Component } from 'react'
import {ProductContext} from '../context'
import { FiPhoneOutgoing } from "react-icons/fi";

export default class Layoutcart extends Component {
  state = {
    modalShow: false
  }

  static contextType = ProductContext

  render() {

    const { cart, subTotal, total } = this.context  

    return (
      <>
        <div className="layout-cart">
          <article className="order-summary-cart">
            <header className="layout-header-summary">
              <span>Order Summary</span>
              <a href="/cart">Edit Cart</a>
            </header>
            <hr/>
            <section className="layout-section-body">
                {cart.length > 0 ? cart.map((item,index) => (
                  <div key={index} className="layout-section-item">
                  <div><img src={item.images[0]} width="20%" height="20%" alt=""/></div>
                  <div><h2>{item.name}</h2></div>
                  <span>£{item.price}</span>
                  </div>
                )) : 'Nothing to show here :)'}
                
              <hr/>

              <div className="layout-section-subtotal-item">
                <div>Subtotal</div>
                <span>£{subTotal}</span>
              </div>
              
              <div className="layout-section-total-item-shipping">
                <span> <FiPhoneOutgoing/> You will be contacted for delivery fees.</span>
              </div>

              <hr/>

              <div className="layout-section-total-item">
                <div>Total</div>
                <span>£{total}</span>
              </div>

            </section>            
          </article>
          
        </div>
      </>
    );
  } 
}


   
