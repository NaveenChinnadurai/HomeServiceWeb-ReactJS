import React from 'react';
import "../Styles/contactStyles/contact.css"
import ContactInfo from '../Components/contactPage/contactInfo';
import ContactForm from '../Components/contactPage/contactForm';
import AppPromo from '../Components/contactPage/appPromo';
import BookService from '../Components/aboutPage/bookService'
function Contact() {
  return (
    <div className='contact-div'>
      <ContactInfo/>
      <ContactForm/>
      <AppPromo/>
      <BookService/>
    </div>
  );
}

export default Contact;