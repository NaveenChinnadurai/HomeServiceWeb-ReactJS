import React from "react";
import "../Styles/footer.css";
import {MdArrowForwardIos as RightArrow} from 'react-icons/md'
import {AiOutlineMail as Mail} from 'react-icons/ai'
import {FaLocationDot as Location} from 'react-icons/fa6'
import {BsFillTelephoneFill as Phone} from 'react-icons/bs'
import {FaFacebookSquare as FB,FaWhatsapp as WA,FaTwitter as Twit,FaInstagram as IG,FaLinkedin as Li} from "react-icons/fa"
function Footer(){
    return (
        <div className="footer">
            <div className="footer-div1">
                <div className="div">
                    <div className="img-div"></div>
                    <div className="media-icon">
                        <FB className="icons"/>
                        <WA className="icons"/>
                        <Twit className="icons"/>
                        <IG className="icons"/>
                        <Li className="icons"/>
                    </div>
                </div>
                <div className="div">
                    <h2>Quick Link</h2>
                    <ul className="list">
                        <li><RightArrow className='arrowIcon'/>Partners</li>
                        <li><RightArrow className='arrowIcon'/>Gallery</li>
                        <li><RightArrow className='arrowIcon'/>Services</li>
                        <li><RightArrow className='arrowIcon'/>About Us</li>
                        <li><RightArrow className='arrowIcon'/>Contact Us</li>
                    </ul>
                </div>
                <div className="div service-div">
                    <h2>Services</h2>
                    <ul className="list">
                        <li><RightArrow className='arrowIcon'/>Painting Services</li>
                        <li><RightArrow className='arrowIcon'/>Plumbing Services</li>
                        <li><RightArrow className='arrowIcon'/>Interior Services</li>
                        <li><RightArrow className='arrowIcon'/>Package and Move</li>
                        <li><RightArrow className='arrowIcon'/>Electric Services</li>
                    </ul>
                </div>
                <div className="div reachUs-div">
                    <h2>Reach Us At</h2>
                    <ul className="list">
                        <li><span><Location className="icon ic"/></span>1/64,fourth Street<br/>French Colony,<br/>Coimbatore-606 704</li>
                        <li><span><Mail className="icon ic mail"/></span>homeserviceofficial.co.in</li>
                        <li><span><Phone className="icon ic mail"/></span>1800 103 1123<br/>+91(144)67447000</li>
                    </ul>
                </div>
            </div>
            <div className="copy-right">
                <div className="main-div5">
                    <span> &copy; Copy Right 2023, All Rights Reserved | HOME SERVICE</span>
                </div>
                <div >
                    <span class="dpp">Disclaimar | </span>
                    <span class="dpp">Privacy | </span>
                    <span class="dpp">Policies</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;