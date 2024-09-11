import React from 'react'
import "../contactform/contactform.css"
import { Button, Card, Form } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div>
        <div className='contact-form container    '>
          
            <div className=''>
               <Card className='contact-card'>
                <Form className=''>
           <center>
           <h3>CONTACT US</h3>
                <div className='icons container'>
                    <div><SiGmail className='icon icon1' /></div>
                    <div><IoCallSharp className='icon icon2' /></div>
                    <div><FaFacebook className='icon icon3'/></div>
                    <div><IoLogoWhatsapp className='icon icon4' /></div>
                    <div><FaInstagramSquare className='icon icon5' /></div>
                    <div><FaLinkedin className='icon icon6' /></div>
                </div>
           </center>

                    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="email" placeholder="JohnDoe/JaneDoe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
                <center>
            <Button className='submit-btn'>SUBMIT</Button></center>
                </Card> 
            </div>
        </div>
        
    </div>
  )
}

export default ContactForm
