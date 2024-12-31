import SkillCard from '../skillCard/SkillCard'
import './skills.css'

// Import all logos using Vite's glob import
const logos = import.meta.glob('../../assets/logos/*.svg', { eager: true });
console.log(logos)

// Transform logos into a usable object
const logoMap = Object.keys(logos).reduce((acc, path) => {
    const name = path.split('/').pop().split('.')[0].toLowerCase(); // Extract file name
    acc[name] = logos[path].default || logos[path]; // Store by name
    return acc;
}, {});

console.log(logoMap)

function Skills(){

    const skills = [ 
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        }, 
        {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        },
        {
            name: "C#",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        },
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        },
        {
            name: "CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        },    
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"          
        },
        {
            name: " Django",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
        },
        {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        },
        {
            name: "Express",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        },

        {
            name: "Node",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            name: "Google Maps API",
            logo: logoMap["google-maps"]    
        },
        {
            name: "Wagtail CMS",
            logo: logoMap["wagtail"]    
        },
        {
            name: "Sass CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"   
        },
        {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        },
        {
            name: "AWS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    
        },
        {
            name: " GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        },
        {
            name: "Unity Game Engine",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg"          
        },
        {
            name: "Bootstrap",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
        },        
    ]
    
    return(
        <div id="skills" className="container pt-4">
            <div className='heading-container'>
                <h1>Skills</h1>
            </div>
            <hr></hr>
            <div id="skill-cards-container" align="center">
                {skills.map((skill, index) => 
                    <SkillCard skill={skill} key={index} />
                )}
            </div>
        </div>
    )
}

export default Skills