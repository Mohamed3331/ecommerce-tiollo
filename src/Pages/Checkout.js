import React, {useState} from 'react'
import LayoutCart from '../Components/Layoutcart'
import Accordion from 'react-bootstrap/Accordion'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Bar from '../Components/Bar'
import {Link} from 'react-router-dom'
import { MdCheckCircle } from 'react-icons/md';
import { IoMdAlert } from 'react-icons/io';
import { AiOutlinePound } from 'react-icons/ai';
import { Formik, Field, } from 'formik';
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

  const [title, setTitle] = useState("");
  
  
  const styledAccordion = {
    ['padding']: '0px',
    ['background-color']: 'white'
  }

  const styledCard = {
    ['border']: '0px',
    ['background-color']: 'white transparent',
    ['width']: '80rem',
    ['border-radius']: '0px',
    ['border-bottom-width']: 'thin',
    ['max-width']: '55rem',
  }

  const cardHeader = {
    ['background-color']: 'white',
    ['border-bottom']: '0px',
    ['font-size']: '30px',
     ['max-width']: '40rem',
  }

  const cardInfo = {
    ['margin-bottom']: '20px',
    ['margin-left']: '40px',
    ['font-size']: '15px'
  }

  const styledDiv = {
    ['margin-top']: '30px'
  }

    const styledForm = {
      ["width"]: "50%",
      ["height"]: "50px",
      ["margin-right"]: "20px",
      ["display"]: "inline"
    };

    const styledInput = {
      ["margin-right"]: "25px",
      ["margin-bottom"]: "25px",
    }

    const styledTextArea = {
       ["margin-right"]: "25px",
       ["margin-bottom"]: "25px",
       ["width"]: "70%",
       ["height"]: "px",
     };
    
    return (
      <>
        <Bar />
        <div className="checkout-page-container">
          <section className="checkout-accordion-container">
            <Accordion style={styledAccordion} defaultActiveKey="0">
              <Card style={styledCard}>
                <Accordion.Toggle
                  as={Card.Header}
                  style={cardHeader}
                  eventKey="0"
                >
                  <MdCheckCircle size={30} /> Customer
                </Accordion.Toggle>
                <Accordion.Collapse style={cardInfo} eventKey="0">
                  <Card.Body>
                    Checking out as a Guest? You'll be able to save your details
                    to create an account with us later.
                    <div style={styledDiv}>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <div>
                            {" "}
                            <Form.Label>Email address</Form.Label>{" "}
                          </div>
                          <Form.Control
                            style={styledForm}
                            onChange={event => setTitle(event.target.value)}
                            type="email"
                          />
                          <Button className="button-form" variant="dark">
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

              <Card style={styledCard}>
                <Accordion.Toggle
                  as={Card.Header}
                  style={cardHeader}
                  eventKey="1"
                >
                  <MdCheckCircle size={30} /> Shipping
                </Accordion.Toggle>
                <Accordion.Collapse style={cardInfo} eventKey="1">
                  <Card.Body>
                    Shipping Address.
                    <Formik
                      validationSchema={schema}
                      onSubmit={console.log}
                      initialValues={{ firstName: "Mark", lastName: "Otto" }}
                    >
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
                            <Form.Group
                              style={styledInput}
                              md="4"
                              controlId="validationFormik01"
                            >
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

                            <Form.Group
                              style={styledInput}
                              md="4"
                              controlId="validationFormik02"
                            >
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

                          <Button type="submit">Submit form</Button>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />

              <Card style={styledCard}>
                <Accordion.Toggle
                  as={Card.Header}
                  style={cardHeader}
                  eventKey="2"
                >
                  <MdCheckCircle size={30} /> Payment
                </Accordion.Toggle>
                <Accordion.Collapse style={cardInfo} eventKey="2">
                  <Card.Body>
                    <IoMdAlert size={30} color={"red"} /> Unfortunately payments
                    via credit cards are suspended temporarly. Only cash on
                    delivery are accepted.
                    <div style={styledDiv}>
                      <Form>
                        {["checkbox"].map(type => (
                          <div key={`custom-${type}`} className="mb-3">
                            <Form.Check
                              custom
                              type={type}
                              id={`custom-${type}`}
                              label={`Payment cash on Delivery `}
                            />{" "}
                            <AiOutlinePound size={25} />
                          </div>
                        ))}
                      </Form>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </section>
          <LayoutCart />
        </div>
      </>
    );
}
