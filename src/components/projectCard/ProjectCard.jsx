function ProjectCard({project}){
    return(
        <>
                <div className="card p-2 m-2 text-bg-dark project-card">
                    <img src={project.image} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <div className="mt-auto">
                            <a href={project.link} target="_blank" className="btn btn-light p-2 m-2 ">View website</a>
                            <a href={project.githublink} target="_blank" className="btn btn-light p-2 m-2 ">View on GitHub</a>
                        </div>
                    </div>
                </div>
        </>
        
    )

}

export default ProjectCard