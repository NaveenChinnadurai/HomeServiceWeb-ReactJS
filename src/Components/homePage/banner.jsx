import React from 'react'
import "../../Styles/homeStyles/banner.css"
function Banner() {
  return (
    <div className='banner'>
            <div className="banner-div">
                <span className="banner-text">Home Services at Your</span>
                <span className="banner-text">Door Step</span>
                <span className="banner-text-small">Customer satisfaction is our priority!!</span>
            </div>
            <div className="banner-btn">
                <span className="banner-btn-1">Know More</span>
                <span className="banner-btn-1">Subscribe</span>
        </div>
    </div>
  )
}
export default Banner