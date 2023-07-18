import React from 'react';
import "../Styles/contactUsStyles/contact.css"
import ContactInfo from '../Components/contactInfo';
import ContactForm from '../Components/contactForm';
import AppPromo from '../Components/appPromo'
function Contact() {
  return (
    <div className='contact-div'>
      <ContactInfo/>
      <ContactForm/>
      <AppPromo/>
    </div>
  );
}

export default Contact;