import React from "react";
// import ArticleContext from "../../utils/ArticleContext.js";
import "./style.css"

function ProjectCard(ArticleContext) {
    console.log(ArticleContext);
   const portfolios = ArticleContext.ArticleContext.portfolio[0];
    return (
        <div id="cards">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`${portfolios.image}`} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{portfolios.name}</h5>
                            <p className="card-text">{portfolios.info}</p>
                            <p className="card-text">{portfolios.link}
                                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard