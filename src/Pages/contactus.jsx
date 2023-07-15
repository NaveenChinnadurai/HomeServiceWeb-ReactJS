import React from 'react';
import "../Styles/contactUsStyles/contact.css"
function Contact() {
  return (
    <div className='contact-div'>
        <h1 className='contact'>Get in Touch With Us </h1>
        <div className="details">
            <div className="para">
              <p>We'd love to hear from you! If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. Our team is here to assist you and provide the information you need.</p>
            </div>
            <div className='para'>
              <h3>General Inquiries:</h3>
              <p>For general inquiries or assistance, please send us an email at info@example.com or fill out the contact form below. We strive to respond to all inquiries within 24 hours.</p>
            </div>
            <div className="para">
              <h3>Customer Support:</h3>
              <p>If you require support for our products or services, our dedicated customer support team is ready to help. You can reach us by emailing support@example.com or by contacting our toll-free number: 1-800-123-4567. Our support hours are Monday to Friday, 9:00 AM to 6:00 PM (EST).</p>
            </div>
            <div className="para">
              <h3>Partnerships and Collaborations:</h3>
              <p>We are always open to exploring partnerships and collaborations with like-minded businesses and organizations. If you have a proposal or would like to discuss potential opportunities, please email partnerships@example.com. We look forward to hearing from you.</p>
            </div>
            <div className="para">
              <h3>Media Inquiries:</h3>
              <p>For media inquiries or press-related matters, please contact our media relations team at media@example.com. We are available to provide information, interviews, and any other media-related assistance you may need.</p>
            </div>
            <div className="para">
              <h3>Address:</h3>
              <p>1/64,fourth Street<br/>French Colony,<br/>Coimbatore-606 704,<br/>Tamil Nadu,<br/>India</p>
            </div>
            <p>Please note that our physical location is for administrative purposes only, and we do not offer direct customer support at this address.</p>
            <div className="para">
              <h3>Contact Form:</h3>
              <p>You can also use the contact form below to send us a message directly. Please provide your name, email address, and a brief description of your inquiry, and we will get back to you as soon as possible.<br/>Thank you for choosing to get in touch with us. We value your feedback and appreciate your interest in our products/services. We strive to provide the best customer experience possible and will do our utmost to assist you.</p>
            </div>
        </div>
    </div>
  );
}

export default Contact;