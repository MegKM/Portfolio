import ProjectCard from '../projectCard/ProjectCard'
import './projects.css'

function ProjectsPage(){

    const projects = [
        {
            name: "Blackjack",
            image: "/BlackJack.png",
            description: "A fully-functional Blackjack game, built using vanilla JavaScript and DOM manipulation.  Instructions for gameplay are at the bottom of the screen, don't miss the opportunity to listen to your choice of music while playing (bottom right). The project is live on GitHub Pages.",
            link: "https://megkm.github.io/Blackjack/",
            githublink: "https://github.com/MegKM/Blackjack"

        },
        {
            name: "NaturePhotos",
            image: "/NaturePhotos.png",
            description: "A prototype website for viewing photos of the natural world. As a standard user, images can be filtered by tags. After logging in with Google OAuth you will be able to favourite images and create your own custom tags. Built using JavaScript, Express & MongoDB, utilizing MVC methodology, featuring full CRUD functionality, the images are stored on Cloudinary.  This project is live on Heroku.",
            link: "https://nature-photos-394e18c571b1.herokuapp.com/",
            githublink: "https://github.com/MegKM/nature-photos"

        },
        {
            name: "CommuniTalk",
            image: "/Communitalk.png",
            description: "This is a group project built using JavaScript and the MERN stack and features full CRUD functionality.  On this site you can search and add friends, once they have accepted the request you can instant message each other through the use of websockets.  You can view other people's communities and create your own. To test the site use guest login guest@email.com with password 123User456. Create a community, update your profile, have fun :)",
            link: "https://charla-d8fb0f8c0b93.herokuapp.com/",
            githublink: "https://github.com/PyConqueror/MERN-Stack-chat-web-app"

        },
        {
            name: "Grand Central Hotel website",
            image: "/GrandCentral.png",
            description: "This pub website allows users to view upcoming events and the food and drink menus. Once logged in, customers can create an order, selecting from various side options as they go.  The site is designed for easy-customisation by the client.  There's a Django back-end admin section allowing full CRUD functionality. Built using Python and Django, the images are stored on AWS. This project is live on Heroku.",
            link: "https://grandcentral-e0ebd1401088.herokuapp.com/",
            githublink: "https://github.com/MegKM/grand-central"

        },
        {
            name: "Backpay calculator",
            image: "/BackpayCalculator.png",
            description: "This calculator accurately calculates an employee's pay who's covered by the Fast Food Industry Award. The calculator factors in job and award type.  This was built to replace an already existing calculator that didn't allow for minutes to be entered and didn't calculate the crew coach or IFA allowance. Built using JavaScript and React, the project is live on Netlify.",
            link: "https://backpaycalculator.netlify.app/",
            githublink: "https://github.com/MegKM/backpay_calculator"
        }
    ]

    return (
        <>
            <div id="projects" className="container pt-4">
            <h2>Projects</h2>
                <hr></hr>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage