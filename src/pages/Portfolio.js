import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard.js";
import ArticleContext from "../utils/ArticleContext.js";

function Portfolio() {
    const [project, setProject] = useState({
        name: "",
        info: "",
        image: "",
        link: ""
    });

    // useEffect(() => {
    //     console.log(project)
    // }, [project]);

    return (
        <ArticleContext.Provider value={project}>
            <div>
                <ProjectCard />
            </div>
        </ArticleContext.Provider>
    )
}

export default Portfolio