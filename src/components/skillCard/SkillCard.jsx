import '../../App.css'
import './skillCard.css'

function SkillCard({skill}){
    return(
        <>
            <img src={skill.logo} className="skill-logo" alt={skill.name} title={skill.name}/>
        </>
    )
}

export default SkillCard


          