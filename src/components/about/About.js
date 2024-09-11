import React from 'react'
import "../about/about.css"
import aboutimg from "../images/about-us.jpg"
import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <img className='about-img ' src={aboutimg} alt='img'/>
      <div ><h1 className='about-title'>Welcome To <b className='bciti'>BCITI</b>About Us</h1></div>
      <div className='our-mission'>
        <h4 className='title'>OUR MISSION</h4>
        <div><h6  >
          
          At BCITI, our mission is to deliver top-notch IT education that equips our students with the
           knowledge and expertise required to thrive in their careers. We believe in the power of education
           to transform lives and are committed to making high-quality learning accessible to all.
</h6>
</div>
        <Button className='ab-btn'>Learn More</Button>
      </div>
    </div>
  )
}

export default About