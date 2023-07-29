import React from 'react'
import '../../Styles/aboutStyles/aboutInfo.css'
import home from '../../assets/home.jpg'
function AboutContent() {
    const content="We assure you that,we are the ultimate destination for various Home services. We are dedicated to providing you with exceptional products, unparalleled customer support, and an unforgettable online experience.We understand the challenges and needs of our customers. That's why we've made it our mission to offer innovative solutions that address those needs head-on. Whether you're looking for cutting-edge Home Services ,we have everything you need to thrive in our Company.Our team is comprised of passionate professionals who are experts in their respective fields. With years of experience and a deep understanding of House hold services, we have honed our skills to perfection. This expertise allows us to deliver products and services that are not only of the highest quality but also tailored to meet your unique requirements.";
    const about = ['A','B','O','U','T'];
    const aboutText = about.map((x)=>{
        return(
            <p className='about-letter'>{x}</p>
        )
    })
    return (
        <div className='aboutTxt'>
                <div className="aboutLeft">{aboutText}</div>
                <div className='aboutPara'>
                    <h1>Welcome to Home Services</h1>
                    <p>{content}</p>
                </div>
                <div className="aboutImg">
                    <span>Home Services</span>
                </div>
        </div>
  )
}

export default AboutContent