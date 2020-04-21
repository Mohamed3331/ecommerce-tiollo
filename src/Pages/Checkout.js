import React, {useState} from 'react'
import NavBar from '../Components/Navbar'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import { MdCheckCircle } from 'react-icons/md';

import image9 from '../Images/main.webp'

export default function Checkout() {
    const [open, setOpen] = useState(false);

    const styledButton = {
        ['margin-top']: '200px',
        ['margin-left']: '200px'
    }

    return (
        <>
            <NavBar NavWhite="WhiteNav"/>
            <section className="checkout-accordion-container">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <MdCheckCircle size={30}/> Customer
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <MdCheckCircle size={30}/> Shipping
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                        <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        <MdCheckCircle size={30}/> Billing
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                        <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                        <MdCheckCircle size={30}/> Payment
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>
        </>
    );
}
