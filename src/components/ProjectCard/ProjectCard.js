import React from "react";
// import ArticleContext from "../../utils/ArticleContext.js";
import "./style.css"

function ProjectCard(ArticleContext) {
    console.log(ArticleContext);
    const portfolios = ArticleContext.ArticleContext.portfolio;
    return (
        <div>
            <p className="portfolio">My Work</p>
            <div id="cards">
                <div class="row row-cols-1 row-cols-sm-2">
                    {
                        portfolios.map((item) => {
                            return (
                                <div className="cardImg col-sm-4">
                                    <div className="card bg-dark mb-3">
                                        <img src={item.image} class="card-img-top" alt="..." id="images" />
                                        <div className="cardText">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="collapsible-body">{item.info}</p>
                                            <a href={item.link}>Visit Page</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default ProjectCard