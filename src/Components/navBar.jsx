import React from "react";

import "../Styles/homeStyles/navBar.css";
function Navbar() {
    return(
        <div className="nav-div1">
            <div className="subdiv1">
                <div className="title">
                    <p>HOME</p>
                    <p>SERVICES</p>
                </div>
                <div className="nav-titles">
                    <ul className="list1">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="subdiv2">
                    <span>Subcribe</span>
                    <span>Log in</span>
            </div>
        </div>
    );
}
export default Navbar;