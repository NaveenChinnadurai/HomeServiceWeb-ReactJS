import React from 'react'
import bookImg from '../../assets/contactPage/contact1.jpg'
import '../../Styles/aboutStyles/bookService.css'

function BookService() {
  return (
    <div className='bookService'>
            <div className="book">
                <h2>Book a Service</h2>
                <input type="email" className='inputBox' placeholder='Email Address'/>
                <input type="text" className='inputBox' placeholder='Mobile No.'/>
                <span className="bookBtn">Book Now</span>
            </div>
    </div>
  )
}

export default BookService