import React, { useState, useContext } from 'react'
import LayoutCart from '../Components/Layoutcart'
import Accordion from 'react-bootstrap/Accordion'
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Bar from '../Components/Bar'
import { MdCheckCircle } from 'react-icons/md';
import { IoMdAlert } from 'react-icons/io';
import { Formik } from 'formik';
import Modal from "react-bootstrap/Modal";
import {ProductContext} from '../context'
import { FaCheck } from 'react-icons/fa';
import * as yup from "yup";

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    address1: yup.mixed().required(),
    address2: yup.mixed().optional(),
    postalCode: yup.number().optional(),
    phoneNumber: yup.number().required(),
    comment: yup.mixed().optional(),
    state: yup.string().optional()
  });

export default function Checkout() {

  const [email, setEmail] = useState(null);
  const [checked1, setChecked1] = useState("black");
  const [checked2, setChecked2] = useState("black");
  const [checked3, setChecked3] = useState("black");
  const [toggle, setToggle] = useState("0")
  const [modalshow, setModalShow] = useState(false)

  const {emailValidator, updateOrderDetails, placeOrder} = useContext(ProductContext);

  const styledAccordion = {
    padding: '0px',
    backgroundColor: 'white'
  }

  const cardHeader = {
    backgroundColor: 'white',
    borderBottom: '0px',
    fontSize: '30px',
    maxWidth: '23rem',
  }

  const cardInfo = {
    marginBottom: '20px',
    marginLeft: '0px',
    fontSize: '13px'
  }

  const styledDiv = {
    marginTop: '30px'
  }

    const styledForm = {
      width: "100%",
      height: "50px",
      marginRight: "20px",
      display: "inline",
      marginBottom: "10px"
    };

    const styledInput = {
      marginRight: "25px",
      marginBottom: "25px",
    }

    const styledTextArea = {
      marginRight: "25px",
      marginBottom: "25px",
      width: "70%",
      height: "px",
     };

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
    
    return (
      <>
        <Bar />

          <section className="checkout-accordion-container">
            <Accordion style={styledAccordion} activeKey={toggle} >
            
              <Card className="checkout-card-container-mobile">

                <Accordion.Toggle onClick={() => setToggle("0")} as={Card.Header} style={cardHeader} eventKey="0" >
                  <MdCheckCircle color={checked1} size={30} /> Customer <small>  </small>
                </Accordion.Toggle>
                
                <Accordion.Collapse style={cardInfo} eventKey="0" >
                  <Card.Body>
                    Checking out as a Guest? You'll be able to save your details to create an account with us later.
                    <div style={styledDiv}>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <div>
                            {" "}
                            <Form.Label>Email address</Form.Label>{" "}
                          </div>
                          <Form.Control style={styledForm} onChange={event => setEmail(event.target.value)} type="email"/>
                          <Button onClick={ () => {emailValidator(email); setChecked1("green"); setToggle("1")} } className="button-email-form" variant="dark">
                            Continue as guest
                          </Button>{" "}
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                      </Form>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />

              <Card className="checkout-card-container-mobile">
 
                <Accordion.Toggle onClick={() => setToggle("1")} as={Card.Header} style={cardHeader} eventKey="1" >
                  <MdCheckCircle color={checked2} size={30} /> Shipping
                </Accordion.Toggle>

                <Accordion.Collapse style={cardInfo} eventKey="1">
                  <Card.Body>
                    Shipping Address.
                    <Formik validationSchema={schema} onSubmit={updateOrderDetails} initialValues={{ firstName: "", lastName: "", address1: "", address2: "", city: "", state: "", phoneNumber: "", postalCode: "", comment: ""}}>
                      {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Form.Row>
                            <Form.Group style={styledInput} md="4" controlId="validationFormik01">
                              <Form.Label>First name</Form.Label>
                              <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={styledInput} md="4" controlId="validationFormik02">
                              <Form.Label>Last name</Form.Label>
                              <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group
                              style={styledInput}
                              md="6"
                              controlId="validationFormik03"
                            >
                              <Form.Label>Address line 1</Form.Label>
                              <Form.Control
                                type="text"
                                name="address1"
                                value={values.address1}
                                onChange={handleChange}
                                isInvalid={!!errors.address1}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.address1}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group
                              style={styledInput}
                              md="6"
                              controlId="validationFormik04"
                            >
                              <Form.Label>Address line 2</Form.Label>
                              <Form.Control
                                type="text"
                                name="address2"
                                value={values.address2}
                                onChange={handleChange}
                                isInvalid={!!errors.address2}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.address2}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group
                              style={styledInput}
                              md="6"
                              controlId="validationFormik05"
                            >
                              <Form.Label>City</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Alexandria etc.."
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.city}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              style={styledInput}
                              md="6"
                              controlId="validationFormik06"
                            >
                              <Form.Label>State/Provice</Form.Label>
                              <Form.Control
                                type="text"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.state}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group
                              style={styledInput}
                              md="6"
                              controlId="validationFormik07"
                            >
                              <Form.Label>Postal Code</Form.Label>
                              <Form.Control
                                type="text"
                                name="postalCode"
                                value={values.postalCode}
                                onChange={handleChange}
                                isInvalid={!!errors.postalCode}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.postalCode}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              style={styledInput}
                              md="6"
                              controlId="validationFormik08"
                            >
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.phoneNumber}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group
                              style={styledTextArea}
                              md="6"
                              controlId="validationFormik09"
                            >
                              <Form.Label>Order Comment</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Tell us anything we need to know before placing your order."
                                name="comment"
                                value={values.comment}
                                onChange={handleChange}
                                isInvalid={!!errors.comment}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.comment}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Form.Row>

                          <Button onClick={() => {setChecked2("green"); setToggle("2")}} className="form-submit-button" type="submit">Submit Shipping Info.</Button>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />

              <Card className="checkout-card-container-mobile">

                <Accordion.Toggle onClick={() => setToggle("2")} as={Card.Header} style={cardHeader} eventKey="2">
                  <MdCheckCircle color={checked3} size={30} /> Payment
                </Accordion.Toggle>

                <Accordion.Collapse style={cardInfo} eventKey="2">
                  <Card.Body>
                    <IoMdAlert size={30} color={"red"} /> Unfortunately payments
                    via credit cards are suspended temporarly. <strong> Only cash on
                    delivery are accepted.</strong>
                    <div style={styledDiv}>
                      <Form>
                        {["checkbox"].map(type => (
                          <div key={`custom-${type}`} className="mb-3">
                            <Form.Check onClick={() => {setChecked3("green")}} custom type={type} id={`custom-${type}`} label={`Payment cash on Delivery `}/>{" "}
                          </div>
                        ))}
                      </Form>
                      <button onClick={() => {placeOrder(); setModalShow(true) }}className="checkoutfinish-button-submit">Place Order</button>

                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

          </section>
           <LayoutCart />

            <MyVerticallyCenteredModal
          show={modalshow}
          onHide={() => setModalShow(false)}
          />
      </>
    );
}
