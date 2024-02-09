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
            name: "Django",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
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
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        },
        
    ]
    return(
        <div id="skills" className="container pt-4">
            <h2>Skills</h2>
            <div className="card-group">
                {skills_first.map((skill, index) => <SkillCard skill={skill} key={index} />)}
            </div>
            <div className="card-group">
                {skills_second.map((skill, index) => <SkillCard skill={skill} key={index} />)}
            </div>
        </div>
    )
}

export default Skills