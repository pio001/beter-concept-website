import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo/Logo';
import "../navigationbar/navigationbar.css"
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <div>
        <Navbar expand="lg" className=" nav bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='brand' ><Logo/>
        <b className='bciti'> BCITI</b>
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Text>
        <Navbar.Collapse id="navbarScroll">
          <Nav >
            <Link to="/" className='nav-link'><h5>HOME</h5></Link>
            <Link to="/about" className='nav-link'><h5>ABOUT US</h5></Link>
            <Link to="/review" className='nav-link'><h5>REVIEW</h5></Link>
            <Link to="/contact" className='nav-link'><h5>CONTACT US</h5></Link>
            
          </Nav>
         
        </Navbar.Collapse>
            
        </Navbar.Text>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar