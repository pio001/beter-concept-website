import React from 'react'
import "../productcard/productcard.css"
import card1 from "../images/stillgraphics.jpg"
import card2 from "../images/motiongraphics.jpg"
import card3 from "../images/filmproduction.jpg"
import card4 from "../images/3dmotion.jpg"
import card5 from "../images/softwareengineering.jpg"
import card6 from "../images/archdesigns.jpg"
import card7 from "../images/weblearning.jpg"
import card8 from "../images/webapplication.jpg"
import card9 from "../images/hardwarelearning.jpg"
//swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const ProductCard = () => {
  return (
    <div className=''>
        <center><h3>Top Categories</h3></center>
        <Swiper  
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
       
        modules={[Autoplay]}
        className="mySwiper">
            <SwiperSlide className='product-card'><img src={card1} alt='card1' className='col product-card '/><p className='product-card-text'>Still Graphics</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card2} alt='card1' className='col product-card'/><p className='product-card-text'>Motion Graphics</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card3} alt='card1' className='col product-card'/><p className='product-card-text'>Film Production</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card4} alt='card1' className='col product-card'/><p className='product-card-text'>3D Animation</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card5} alt='card1' className='col product-card'/><p className='product-card-text'>Software Engineering</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card6} alt='card1' className='col product-card'/><p className='product-card-text'>Architectural Designs</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card7} alt='card1' className='col product-card'/><p className='product-card-text'>Web Learning</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card8} alt='card1' className='col product-card'/><p className='product-card-text'>Web Applications</p></SwiperSlide>
            <SwiperSlide className='product-card'><img src={card9} alt='card1' className='col product-card'/><p className='product-card-text'>Hardware Learning</p></SwiperSlide>

        </Swiper>
   
    </div>
  )
}

export default ProductCard
