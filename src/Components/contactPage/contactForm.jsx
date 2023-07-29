import React from 'react'
import "../../Styles/contactStyles/contactForm.css"
import contactImg from '../../assets/contactPage/contact1.jpg'
function ContactForm() {
  return (
    <div className='divForm'>
        <div className="formTitle">
              <h2>CONTACT FORM</h2>
              <p>You can also use the contact form below to send us a message directly. Please provide your name, email address, and a brief description of your inquiry, and we will get back to you as soon as possible.</p>
        </div>
        <div className="form">
          <div className="formHeading">
            <p>Fill the form for Enquiry, Our customer Survice executive will contact you with in 24 hours from the time of form submission</p>
          </div>
          <div className='formContent'>
            <div className='formInputs'>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Mobile Number' />
              <input type="email" placeholder='E-mail Id' />
              <input type="text" placeholder='address' />
              < textarea name="" id="" cols="30" rows="10" className='textArea' placeholder='Enter Your Query Here'/>
            </div>
            <div className="imgDiv">
              <img src={contactImg} alt="contact Image" className='contactImg' />
            </div>
          </div>
          <div className="subBtn">
            <button>Submit</button>
          </div>
        </div>
        <div className="dummy">
          <p>Thank you for choosing to get in touch with us. We value your feedback and appreciate your interest in our products/services. We strive to provide the best customer experience possible and will do our atmost to assist you.</p>
        </div>
    </div>
  )
}

export default ContactForm