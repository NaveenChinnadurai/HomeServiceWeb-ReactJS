import React from "react";
import Banner from "../Components/banner";
import Count from "../Components/count";
import Features from "../Components/features";
import "../Styles/home.css";
import { Services } from "../Services";
import {ServiceDisplay as Cards} from "../Components/homeServiceDisplay";

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
            <div className="cards">
                <Cards id={Services.id}/>
            </div>
        </div>
    );
}
export default Home;