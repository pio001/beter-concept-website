import React from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../fotter/fotter.css"

const Fotter = () => {
  return (
    <div className='fotter '>
         <Card className="text-center">
     
      <Card.Body>
        <div className='row '>
            <div className='col'>
                <div className='row'>
                    <div className='col'>
                        Our Team<br/>
                        Our Content Specialists<br/>
                        Our Leadership<br/>
                        Our Supporters<br/>
                        Our Contributors<br/>
                        Our Finances<br/>
                        Careers<br/>
                    </div>
                    <div className='col'>
                    FAQs<br/>
                    Child safety<br/>
                    Help Centre<br/>
                    Contact<br/>
                    </div>

                </div>
            </div>
            <div className='col'>
                <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
         Enter Your Email To Get Our News Letter
         <Form className='row'>
            <Form.Group className="   col-9 col-12 mb-3" controlId="exampleForm.ControlInput1">
                
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Button  className=' contact-us-btn  col-3 col-12 mb-3'>SUBMIT  </Button>
         </Form>
        </Card.Text>
        <Button className='contact-us-btn' >CONTACT US  </Button></div>
        </div>
      </Card.Body>
      <Card.Footer className="">Designed And Developed by prosper Oforah @2024</Card.Footer>
    </Card>
      
    </div>
  )
}

export default Fotter
