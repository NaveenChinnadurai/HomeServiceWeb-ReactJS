import React from "react";
import Banner from '../Components/homePage/banner'
import Count from '../Components/homePage/count';
import Features from '../Components/homePage/features';
import AppPromo from '../Components/contactPage/appPromo';
import WorkInfo from '../Components/homePage/workInfo';
import '../Styles/homeStyles/home.css';
import Image from '../assets/images.jpg'
function Home() {
    return(
        <div className="home-div">
            <Banner/>
            <Count/>
            <Features/>
            <div className="title">
                <h1>Our Services</h1>
                <h3>We Provide about five Services</h3>
            </div>
            <WorkInfo/>
            <img src={Image} alt="Home Services" />
            <AppPromo />
        </div>
    );
}
export default Home;