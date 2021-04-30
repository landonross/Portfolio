import React from "react";
import Header from "./Header/Header.js"
import AboutMe from "./AboutMe/AboutMe.js"

function BaseLayout() {
    return (
        <div>
            <Header />
            <AboutMe />
        </div>
    )
}

export default BaseLayout