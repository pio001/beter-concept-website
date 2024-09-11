import React from 'react'
import NavigationBar from '../components/navigationbar/NavigationBar'
import Carousel from '../components/carousel/Carousel'

import Fotter from '../components/fotter/Fotter'
import Review from '../components/review/Review'
import ProductCard from '../components/productcard/ProductCard'
import ContactForm from '../components/contactform/ContactForm'
import Aboutcard from '../components/aboutcard/Aboutcard'

const HomePage = () => {
  return (
    <div >
        <NavigationBar/>
        <Carousel/>
        <Aboutcard/>
        <Review/> 
        <ProductCard/>
        <ContactForm/>
        <Fotter/> 
    </div>
  )
}

export default HomePage