import '../../App.css'

function SkillCard({skill}){
    return(
        <>
                <div className="card p-5 m-2 border-0 bg-transparent">
                    <img src={skill.logo} className="card-img-top" alt="..."/>
                    <div className="card-body ">
                    </div>
                </div>
        </>
    )
}

export default SkillCard