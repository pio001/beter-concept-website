import React from 'react'
import NavigationBar from '../components/navigationbar/NavigationBar'
import ContactForm from '../components/contactform/ContactForm'
import Fotter from '../components/fotter/Fotter'

const ContactPage = () => {
  return (
    <div>
        <NavigationBar/>
        <ContactForm/>
        <Fotter/>
    </div>
  )
}

export default ContactPage