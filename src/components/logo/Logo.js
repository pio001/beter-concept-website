import React, { useEffect } from 'react'
import img1 from '../images/Rectangle 1.png'
import img2 from '../images/Rectangle 2.png'
import img3 from '../images/Rectangle 3.png'
import "../logo/logo.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Logo = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div>
        <div> <img className='logo' data-aos="zoom-in-left" src={img1} alt='img' /></div>
        <div> <img className='logo' data-aos="zoom-in-top"  src={img2} alt='img'/></div>
        <div> <img className='logo' data-aos="zoom-in-right"  src={img3} alt='img'/></div>
      </div>
    </div>
  )
}

export default Logo