import React from 'react'

import promoImg from '../assets/promoImage.png';
import playStoreImg from '../assets/playstore.png';
import AppleStoreImg from '../assets/applestore.png';
import "../Styles/AppPromo.css"
function AppPromo() {
  return (
    <div className="app-promo">
        <div className="app-promo-text">
            <span className="app-promo-head">Get Home Service App</span>
            <p className="description">You can also access our services via your smart phones.<br/>24/7 customer care support with Home Service Android Application.Let's a family via mobile phones.</p>
            <div className="download-app">
                <img src={playStoreImg} alt="playstore" className="download-icon" />
                <img src={AppleStoreImg} alt="applestore" className="download-icon" />
            </div>
        </div>
        <div className="app-promo-img-div">
            <img src={promoImg} alt="mobilePromo" className="app-promo-img"/>
        </div>
    </div>
  )
}

export default AppPromo