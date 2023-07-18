import React from 'react'
import "../Styles/contactUsStyles/contactInfo.css"
import {FiMail as Mail} from 'react-icons/fi';
import {AiOutlinePhone as Phone} from 'react-icons/ai';
import {FaLocationDot as Location,FaHandshake as HandShake} from 'react-icons/fa6'
function ContactInfo() {
  return (
    <div className='center-column contactDiv'>
        <h1 className='contact'>Get in Touch With Us </h1>
        <div className="center-row details">
            <div className="contactTitle">
              <p>We'd love to hear from you! If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. Our team is here to assist you and provide the information you need.</p>
            </div>
            <div className='para'>
              <span><Mail className='icons'/></span>
              <h3>General Inquiries:</h3>
              {/* <p>For general inquiries/assistance</p><br/> */}
              <p className='mg'>Mail Us on </p>
              <p>info@example.com</p>
            </div>
            <div className="para">
              <span><Phone className='icons'/></span>
              <h3>Customer Support:</h3>
              <p className='mg'>Toll-free : 1-800-123-4567. </p>
              <p>Monday to Friday, 9:00 AM to 6:00 PM (EST).</p>
            </div>
            <div className="para">
              <span><HandShake className='icons'/></span>
              <h3>Partnerships and Collaborations:</h3>
              <p className='mg'>Mail us on</p>
              <p>partnerships@example.com.</p>
            </div>
            <div className="para">
              <span><Location className='icons'/></span>
              <h3>Main Branch:</h3>
              <p>1/64,fourth Street<br/>French Colony,<br/>Coimbatore-606 704,<br/>Tamil Nadu,<br/>India</p>
            </div>
            <div className="">
                <p>*Please note that our physical location is for administrative purposes only, and we do not offer direct customer support at this address.</p>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo