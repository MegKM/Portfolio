import SkillCard from '../skillCard/SkillCard'

function Skills(){

    const skills_first = [ 
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        },
        {
            name: "CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
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
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        
    ]

    const skills_second = [ 
        
        {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        },
        {
            name: "Express",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        },
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"          
        },
        {
            name: "Node",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            name: " Django",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
        },
    ]

    const skills_third= [ 
    
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
        {
            name: "Heroku",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original-wordmark.svg"
        },
        
    ]
    return(
        <div id="skills" className="container pt-4">
            <h2>Skills</h2>
            <hr></hr>
            <div className="card-group">
                {skills_first.map((skill, index) => <SkillCard skill={skill} key={index} />)}
            </div>
            <div className="card-group">
                {skills_second.map((skill, index) => <SkillCard skill={skill} key={index} />)}
            </div>
            <div className="card-group">
                {skills_third.map((skill, index) => <SkillCard skill={skill} key={index} />)}
            </div>
        </div>
    )
}

export default Skills