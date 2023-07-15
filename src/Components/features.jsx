import React from 'react'
import '../Styles/features.css'
import img1 from '../images/all.jpg'

function Features() {
  return (
    <div className="features">
        <span className="features-head">Why You Should Choose Us</span>
        <div className="features-div">
            <div className="features-content">
                <p>This is a multi-service company where we provide various service at one site.We provide quality ,effective and attractive service based on your choice.You can book our services by simple process and our executive officers will reach you shortly.We provide services various cities and towns with budget friendly.We have serviced many customers with their satisfaction. </p>
                <div className="features-btn">
                    <span>Learn More</span>
                    <span>Book Now</span>
                </div>
            </div>
            <div className="features-img-div">
                <img src={img1} alt='all.jpg' className='features-img'/>
            </div>
        </div>
        
    </div>
  )
}

export default Features