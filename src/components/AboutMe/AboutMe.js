import React from "react";
import "./style.css";
import Selfie from "./profile.jpg"

function AboutMe() {
    return (
        <div>
        <img className="selfie" src={Selfie} alt="Profile"/>
        <p className="textBody">Welcome to my page! I have been coding since late
        2020 and the passion to push myself and continue growing in my skills hasn't stopped since. I
        love the coding field and how it is always changing. I am a passionate board game enthusiast and
        as such, I love a challenge and the thrill of continually pushing myself to develop new skills
        and fine tuning what I'm good at.</p>
        </div>
    )
}

export default AboutMe