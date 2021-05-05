import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div>
         <nav className="navbar navbar-expand-sm p-3 mb-5">
        <Link className="navbar-brand text-white" to="/">Landon Ross</Link>
        <button className="navbar-toggler d-lg-none navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: "2vw"}}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                </li>
                <li className="nav-item1">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
        </ul>
        </div>
    </nav>
    </div>
    )
}

export default Header