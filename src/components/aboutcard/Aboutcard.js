import React from 'react'
import "../aboutcard/aboutcard.css"
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Aboutcard = () => {
  return (
    <div>
        <center className='ab-content-title'><Spinner animation="grow"/><h3 >ABOUT US</h3><Spinner animation="grow"/></center>
            <div className=' container-fluid'>
        <center>
           
            <div className=' container about-card  mt-3 mb-3'>
            
            <p className='content container' >
                 
                 WELCOME to <b>Beter Concepts Computer & Information Technology Institute (BCITI)</b>,
                     where we are dedicated to providing comprehensive IT education and training 
                     tailored to the practical needs of Nigeria and beyond. We offer a diverse range
                     of over 60 offline and online courses designed to empower individuals and professionals
                     with the skills necessary to excel in today's digital world.
                     <Button className='about-btn'><Link to="/about" className="ab-link">Read more... </Link></Button>
             </p>
            </div>
        </center>
    </div>
    </div>
    
  )
}

export default Aboutcard