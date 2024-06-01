import React from "react";
import './contact.css';
import Walmart from'../../assets/walmart.jpeg';
import Adobe from '../../assets/Adobe.jpeg';
import Microsoft from '../../assets/Microsoft.jpeg';
import Facebook from'../../assets/FaceBook.jpeg';

import FacebookIcon from '../../assets/FacebookIcon.jpeg';
import TwitterIcon from '../../assets/TwitterIcon.jpeg';
import YouTubeIcon from '../../assets/YoutubeIcon.jpeg';
import InstagramIcon from '../../assets/InstagramIcon.jpeg';

const Contact = () => {
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle"> My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="client" className="clientImg"/>
                    <img src={Adobe} alt="client" className="clientImg"/>
                    <img src={Microsoft} alt="client" className="clientImg"/>
                    <img src={Facebook} alt="client" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Conatct Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss my work </span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={TwitterIcon} alt="TwitterIcon" className="link"/>
                        <img src={YouTubeIcon} alt="YoutubeIcon" className="link"/>
                        <img src={InstagramIcon} alt="InstagramIcon" className="link"/>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact;