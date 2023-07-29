import React from "react";
import "../Styles/aboutStyles/about.css";
import AboutContent from '../Components/aboutPage/aboutinfo';
import Count from '../Components/homePage/count';
import KeyPoints from "../Components/aboutPage/aboutKPoints";
import ServiceCard from "../Components/aboutPage/serviceCard";
import Founders from "../Components/aboutPage/founders";
import BookService from "../Components/aboutPage/bookService";
function About(){
    const lastPara="We are immensely grateful for the trust and support of our valued customers. Your satisfaction is our top priority, and we continuously strive to improve and expand our offerings to better serve you. Thank you for choosing our Home Service. We are excited to be a part of your [industry or niche] journey and look forward to exceeding your expectations."
    return(
        <div className="aboutPage">
            <div className="aboutBanner">
                <h2>Know About Us</h2>
                <span className="aboutText">We are the leading Service Provider in Tamil Nadu</span>
                <span className="btn">Book a Service </span>
            </div>
            <Count/>
            <AboutContent/>
            <KeyPoints />
            <Founders/>
            <BookService/>
            <ServiceCard/>
            <div className="para2">
                <p>{lastPara}</p>
            </div>
        </div>

    );
}

export default About;