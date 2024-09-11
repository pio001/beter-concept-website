import React, { useEffect } from 'react'
import "../review/review.css"
import { Card, CardBody, Spinner } from 'react-bootstrap'
import img1 from "../images/img1.webp"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.avif"
import img5 from "../images/img5.avif"
import img6 from "../images/img6.jpg"
import AOS from "aos";
import "aos/dist/aos.css";






const Review = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div >
        <center className='content-title'> <Spinner animation="grow" /><h3>  REVIEW</h3> <Spinner animation="grow" /></center>
      <div  className='container '>
        
        <div className='container-fluid row '>
          
          <div className='container col-sm-12 col-lg-6  review-card ' >
            <Card className='review-card-content' data-aos="flip-left">
              <CardBody>
                <img src={img1} alt='review-img' className='review-img'/><br/>
                  <b>Student: John Doe</b>
                  <p>
                    "I couldn't be happier with my decision to enroll at <b>BCITI</b>.
                    The curriculum is comprehensive and up-to-date with the latest industry
                      standards. The hands-on projects and internships have provided me with
                      invaluable experience, and the faculty are incredibly supportive and
                        knowledgeable. I feel well-prepared to enter the ICT field with confidence."
                  </p>
              </CardBody>
            </Card>
          </div>
          <div className='container col-sm-12 col-lg-6 review-card'>
          <Card className='review-card-content' data-aos="flip-right">
            <CardBody>
              <img src={img2} alt='review-img' className='review-img'/><br/>
                <b>Parent: Jane Smith</b>
                <p>
                "My daughter has always been passionate about technology, and <b>BCITI</b> has been the 
                perfect place for her to grow and excel. The school's commitment to academic excellence
                 and its focus on practical skills have truly impressed us. The faculty's dedication to
                  student success is evident in every aspect of their work. We are grateful for the positive
                   impact <b>BCITI</b> has had on her education and career prospects."
                </p>
            </CardBody>
          </Card>
          </div>
        </div>
        <div className='container-fluid row '>
          
          <div className='col-sm-12 col-lg-6  review-card'>
            <Card className='review-card-content' data-aos="flip-left">
              <CardBody>
                <img src={img3} alt='review-img' className='review-img'/><br/>
                  <b>Alumnus: Emily Johnson</b>
                  <p>
                  "Graduating from <b>BCITI</b> was one of the best decisions I ever made.
                   The school's emphasis on both theoretical knowledge and practical application
                    prepared me for the challenges of the tech industry. The connections I made 
                    and the support from the career services office helped me secure a fantastic
                     job shortly after graduation. I highly recommend <b>BCITI</b> to anyone
                      looking to pursue a career in ICT."
                  </p>
              </CardBody>
            </Card>
          </div>
          <div className='col-sm-12 col-lg-6 review-card'>
          <Card className='review-card-content' data-aos="flip-right">
          <CardBody>
            <img src={img4} alt='review-img' className='review-img'/><br/>
              <b>Industry Partner: Michael Brown, CEO of Tech Innovators Inc</b>
              <p>
              "As an industry partner, we've had the pleasure of working with <b>BCITI</b> on several
               projects and initiatives. Their students consistently demonstrate a high level of technical
                proficiency and creativity. The school's focus on real-world applications and industry 
                collaboration ensures that graduates are well-prepared to meet the demands of the tech
                 sector. We look forward to continuing our partnership with <b>BCITI</b>."
              </p>
          </CardBody>
          </Card>
          </div>
        </div>
        <div className='container-fluid row '>
          
          <div className='col-sm-12 col-lg-6  review-card'>
            <Card className='review-card-content' data-aos="flip-left">
              <CardBody>
                <img src={img5} alt='review-img' className='review-img'/><br/>
                  <b>Parent: Robert Davis</b>
                  <p>
                  "Studying at <b>BCITI</b> has been an amazing experience. 
                  The campus facilities are top-notch, and the resources available to students are incredible.
                  The faculty are always willing to help and provide guidance, and the collaborative 
                  environment encourages us to learn from each other. I've grown so much both personally
                   and professionally since I started my journey here."
                  </p>
                </CardBody>
            </Card>
          </div>
          <div className='col-sm-12 col-lg-6 review-card'>
          <Card className='review-card-content' data-aos="flip-right">
          <CardBody>
            <img src={img6} alt='review-img' className='review-img'/><br/>
              <b>Current Student: Sarah Williams</b>
              <p>
              "Studying at <b>BCITI</b> has been an amazing experience. The campus facilities 
              are top-notch, and the resources available to students are incredible. 
              The faculty are always willing to help and provide guidance, and the collaborative 
              environment encourages us to learn from each other. I've grown so much both personally
               and professionally since I started my journey here."
              </p>
          </CardBody>
          </Card>
          </div>
        </div>
      </div>
      </div>
    )
    
}

export default Review
