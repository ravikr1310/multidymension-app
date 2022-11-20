import React from "react";
import About from "../About";
import Achievements from "../Achievements";
import CallToAction from "../CallToAction";
import ContactUs from "../Contactus";
import Footer from "../Footer";
import Motto from "../Motto";
import Client from "../OurClient";
import OurServices from "../OurServices";
import Portfolio from "../Portfolio";
import Team from "../Team";
import Testimonials from "../Testimonials";

function Main(){
    return(
        <main id="main">
            <About/>
            <Client/>
            <Motto/>
            <OurServices/>
            <CallToAction/>
            <Portfolio/>
            <Achievements/>
            <Testimonials/>
            <Team/>
            <ContactUs/>
            <Footer/>
        </main>
    )
}

export default Main;