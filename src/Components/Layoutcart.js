import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";  
import {ProductContext} from '../context'
import { FaCheck } from 'react-icons/fa';

  function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
      <br/>
        <br/>
        <h2> <FaCheck size={30} color={"green"}/> Order Successfully </h2> 
        <br/>
        <br/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default class Layoutcart extends Component {
  state = {
    modalShow: false
  }

  static contextType = ProductContext

  render() {

    const { cart, shipping, subTotal, total, placeOrder } = this.context  

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
                {cart ? cart.map(item => (
                  <div className="layout-section-item">
                  <div><img src={item.images[0]} width="20%" height="20%" alt=""/></div>
                  <div><h2>{item.name}</h2></div>
                  <span>£{item.price}</span>
                  </div>
                )) : <div>Nothing to show here</div>}
                
              <hr/>

              <div className="layout-section-subtotal-item">
                <div>Subtotal</div>
                <span>£{subTotal}</span>
              </div>
              
              <div className="layout-section-total-item">
                <div>Shipping</div>
                <span>£{shipping}</span>
              </div>

              <hr/>

              <div className="layout-section-total-item">
                <div>Total</div>
                <span>£{total}</span>
              </div>

            </section>
            <button onClick={() => {placeOrder(); this.setState({modalShow: true})}}className="checkoutfinish-button-submit">Place Order</button>
            
          </article>
           <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow: false})}
          />
        </div>
      </>
    );
  } 
}


   
