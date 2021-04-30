import React from "react";

function Header() {
    return (
    <div>
         <nav className="navbar navbar-expand-sm p-3 mb-5">
        <a className="navbar-brand text-white" href="/">Landon Ross</a>
        <button className="navbar-toggler d-lg-none navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: "2vw;"}}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Portfolio</a>
                </li>
                <li className="nav-item1">
                    <a className="nav-link" href="/">Contact</a>
                </li>
        </ul>
        </div>
    </nav>
    </div>
    )
}

export default Header