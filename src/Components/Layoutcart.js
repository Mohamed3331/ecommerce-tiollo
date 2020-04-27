import React from 'react'
import image9 from '../Images/main.webp'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";  

  function MyVerticallyCenteredModal(props) {
      
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Layoutcart() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
        <div class="center-wrapper">
        <div class="content">
        <div class="bag">
            <p class="bag-head"><span >Your Bag</span> - 1 item</p>
        </div>
        <div class="bag-product">
            <div class="image">
                <img src="https://www.elenanelmes.com/images/test/ui/suunto_d4i_novo_sun_front_dive_metric.png" class="product-image"/>
            </div>
            <div class="description">
                <h1>Suunto D4i Novo</h1>
                <p class="description-text">An easy-to-use dive computer with freedive mode and air integration.</p>
                <h2>$825.00</h2>
                <div class="quantity-wrapper">
                    <button class="btn-remove">Remove</button>
                </div>
            </div>
        </div>
        <div class="bag-total">
            <div class="subtotal">
                <p class="small">Subtotal:</p>
                <p class="small">$825.00</p>
            </div>
            <div class="delivery">
                <p class="small">Delivery (Standard - 2 working days):
                    <span class="change-delivery">Change delivery method</span></p>
                <p class="small">Free</p>
            </div>
            <div class="total">
                <h3>Total:</h3>
                <h3>$825.00</h3>
            </div>
            <button onClick={() => setModalShow(true)} class="btn-go-checkout">
                <i class="fas fa-lock"></i>
                <span>Go to Checkout</span>
            </button>
        </div>
        <div class="help">
            <p>Need help? Call free 01234 567 890</p>
        </div>
            </div>
            </div>
        <div class="bg"></div>
         <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </> 
    )
}

