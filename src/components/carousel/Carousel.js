import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../carousel/carousel.css"
import car1 from "../images/BCITI-Computer-Class-Moment .jpg"
import car2 from "../images/BCITI-Executive-Business-Center .jpg"
import car3 from "../images/BCITI-Executive-Classroom .jpg"

const Carousel = () => {
  
  return (
    <div className=""> 

<Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img className='car' src={car1} alt='car1' height="100%" /></SwiperSlide>
        <SwiperSlide> <img className='car' src={car2} alt='car2' height="100%"/></SwiperSlide>
        <SwiperSlide> <img className='car' src={car3} alt='car3' height="100%"/></SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Carousel