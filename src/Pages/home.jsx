import React from "react";
import Banner from "../Components/banner";
import Count from "../Components/count";
import Features from "../Components/features";
import AppPromo from "../Components/appPromo";
import WorkInfo from "../Components/workInfo";
import "../Styles/homeStyles/home.css";
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
            <AppPromo />
        </div>
    );
}
export default Home;