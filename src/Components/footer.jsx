import React from "react";
import "../Styles/footer.css";
import {FaFacebookSquare as FB,FaWhatsapp as WA,FaTwitter as Twit,FaInstagram as IG,FaLinkedin as Li} from "react-icons/fa"
function Footer(){
    return (
        <div className="footer">
            <div className="footer-div1">
                <div className="main-div1 div">
                    <div className="img-div"></div>
                    <div className="media-icon">
                        <FB className="icons"/>
                        <WA className="icons"/>
                        <Twit className="icons"/>
                        <IG className="icons"/>
                        <Li className="icons"/>
                    </div>
                </div>
                <div className="main-div2 div">
                    <h2>Quick Link</h2>
                    <ul className="list">
                        <li>Partners</li>
                        <li>Gallery</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="main-div3 div">
                    <h2>Services</h2>
                    <ul className="list">
                        <li>Painting Services</li>
                        <li>Plumbing Services</li>
                        <li>Interior Services</li>
                        <li>Package and Move</li>
                        <li>Electric Services</li>
                    </ul>
                </div>
                <div className="main-div4 div">
                <h2>Reach Us At</h2>
                    <ul className="list">
                        <li>1/64,fourth Street<br/>French Colony,<br/>Coimbatore-606 704</li>
                        <li>homeserviceofficial.co.in</li>
                        <li>1800 103 1123<br/>+91(144)67447000</li>
                    </ul>
                </div>
            </div>
            <div className="footer-div2">
                <div className="main-div5">
                    <span> &copy; Copy Right 2023,All rights Reserved | HOME SERVICE</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;