import React from "react";
import "./style.css";
import Selfie from "./profile.jpg";
import { Link } from "react-router-dom";
// import Contact from "../../pages/Contact.js";

function AboutMe() {
    return (
        <div>
        <img className="selfie" src={Selfie} alt="Profile"/>
        <p className="textBody">Welcome to my page! My name is Landon Ross and I have been coding since late
        2020 and the passion to push myself and continue growing in my skills hasn't stopped since. I
        love the coding field and how it is always changing. I am a passionate board game enthusiast and
        as such, I love a challenge and the thrill of continually pushing myself to develop new skills
        and fine tuning what I'm good at. If you are looking for a customized webpage, head over to my <Link to="/Contact" id="contactLink">Contact</Link> page and give me a description of what you are looking for and I'll be in contact with you within 2-3 business days.</p>
        </div>
    )
}

export default AboutMe