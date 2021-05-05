import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard.js";
import ArticleContext from "../utils/ArticleContext.js";

function Portfolio() {
    const [project, setProject] = useState([{}]);
    console.log(project);

    // useEffect(() => {
    //     setProject(ArticleContext)
    // }, [project]);
    console.log(setProject);

    return (
            <div>
                <ProjectCard ArticleContext={ArticleContext}/>
            </div>
    )
}

export default Portfolio