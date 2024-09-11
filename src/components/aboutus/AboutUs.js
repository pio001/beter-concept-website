import React, { useEffect } from 'react'
import "../aboutus/aboutus.css"


import AOS from "aos";
import "aos/dist/aos.css";


const AboutUs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='cotainer'>
        <div className='container'>
               
            <center className='content container'>
            <div className='about-card card-title' data-aos="fade-left">
         
                    WELCOME to Beter Concepts Computer & Information Technology Institute (BCITI),
                     where we are dedicated to providing comprehensive IT education and training 
                     tailored to the practical needs of Nigeria and beyond. We offer a diverse range
                     of over 60 offline and online courses designed to empower individuals and professionals
                     with the skills necessary to excel in today's digital world.
                </div>
                        
                       
                 
                    <h1 className='about-card   'data-aos="fade-right"><div className='title'>Our Mission</div></h1>
                <p className='about-card' data-aos="fade-left">
                    At BCITI, our mission is to deliver top-notch IT education that equips our students with the
                    knowledge and expertise required to thrive in their careers. We believe in the power of education
                    to transform lives and are committed to making high-quality learning accessible to all.
                </p>
                    <h1 className='about-card 'data-aos="fade-right"><div className='title'>Courses and Programs</div> </h1>
                <p className='about-card' data-aos="fade-left">
                We offer a wide array of courses across various fields, including Computer Applications,
                Desktop Publishing, Affiliate Marketing, and many others. Whether you are interested in 
                mastering Microsoft Word, diving into programming languages like Python and Java, or 
                exploring creative software like Adobe Photoshop and AutoCAD, we have a course for you.
                Our programs are available at Certificate, Diploma, and Advanced Diploma levels to cater
                to different learning needs and career goals.
                </p>
                    <h1 className='about-card ' data-aos="fade-right"><div className='title'>Executive Training</div></h1>
                <p className='about-card' data-aos="fade-left">
                For senior professionals such as Chairpersons, CEOs, MDs, and Directors, we provide specialized
                Executive Classes and services through our Executive Business Center. These services include
                web/software development, system repair, computer supply, logo design, and professional typing, 
                ensuring that executives receive the tailored support they need.
                </p>
                <h1 className='about-card ' data-aos="fade-right"><div className='title'>Qualified Instructors</div> </h1>
                <p className='about-card' data-aos="fade-left">
                    Our team of expert instructors is carefully selected to ensure they possess not only the knowledge 
                    but also the passion for teaching. They are dedicated to providing the best learning experience 
                    and helping you achieve your educational objectives.
                </p>
                <h1 className='about-card ' data-aos="fade-right"><div className='title'>Student Achievements</div></h1>
                <p className='about-card' data-aos="fade-left">
                    We take pride in the accomplishments of our students. From Junior Graphic Designers to Senior
                    Web/Graphic Designers, our students' projects are a testament to the quality of education they 
                    receive at BCITI. Their works, whether in pure carving or pure coding, showcase their skills and 
                    creativity, honed under the guidance of our expert instructors.
                </p>
                <h1 className='about-card 'data-aos="fade-right"><div className='title'>Community and Support</div></h1>
                <p className='about-card' data-aos="fade-left">
                Joining BCITI means becoming part of a vibrant community of learners and professionals. We encourage 
                collaboration, knowledge sharing, and continuous growth. Our support system includes orientation 
                classes to help you choose the right course, ensuring you get the most out of your educational journey.
                </p>
                <h1 className='about-card ' data-aos="fade-right"><div className='title'>Get Started</div></h1>
                <p className='about-card' data-aos="fade-left">
                Ready to start learning and grow with us? Register to join us today and take the first step towards
                achieving your IT and professional goals. Whether you're looking to enhance your skills, switch 
                careers, or train others, BCITI is here to support you every step of the way.

                    For more information, feel free to contact us or visit our FAQs and Help Centre.
                    We're here to help you succeed.
                </p>
            </center>
            
        </div>
    </div>
  )
}

export default AboutUs