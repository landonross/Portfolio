import React, {useContext} from "react";
import ArticleContext from "../../utils/ArticleContext.js";
import "./style.css"

function ProjectCard() {
    const {name, info, image, link} = useContext(ArticleContext)
    return (
        <div id="cards">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{info}</p>
                            <p className="card-text">{link}
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