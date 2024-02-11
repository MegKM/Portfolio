import ProjectCard from '../projectCard/ProjectCard'

function ProjectsPage(){

    const projects = [
        {
            name: "BlackJack",
            image: "/BlackJack.png",
            description: "Built using vanilla JavaScript and DOM manipulation.  The project is live on GitHub.",
            link: "https://megkm.github.io/Blackjack/",
            githublink: "https://github.com/MegKM/Blackjack"

        },
        {
            name: "Nature",
            image: "/NaturePhotos.png",
            description: "Built using JavaScript, Express, MongoDB, featuring MVC methodology and CRUD functionality.  This project is live on Heroku",
            link: "https://nature-photos-394e18c571b1.herokuapp.com/",
            githublink: "https://github.com/MegKM/nature-photos"

        },
        {
            name: "CommuniTalk",
            image: "/Communitalk.png",
            description: "This is a group project built using JavaScript and the MERN stack, featuring CRUD functionality and WebSockets.",
            link: "https://communitalk-4a7ec5f9373f.herokuapp.com/",
            githublink: "https://github.com/PyConqueror/MERN-Stack-chat-web-app"

        },
        {
            name: "Grand Central Hotel website",
            image: "/GrandCentral.png",
            description: "Built using Python and Django, featuring CRUD functionality for admin staff. This project is live on Heroku",
            link: "https://grandcentral-e0ebd1401088.herokuapp.com/",
            
            githublink: "https://github.com/MegKM/grand-central"

        },
    ]

    return (
        <>
            <div id="projects" className="container pt-4">
                <h2>Projects</h2>
                <hr></hr>
                <div className="card-group">
                    {projects.map((project, index) => <ProjectCard project={project} key={index} />)}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage