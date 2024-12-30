import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './home.css'

function Home(){

    const information = [
        {
            title: "About me",
            body: `
                <p>I'm a junior web developer with a passion for back-end programming.  <br><br>I think my strengths lie in my passion for problem-solving, my attention to detail and my belief that every piece of work that has my name against it is a reflection of my character.  I work hard until I'm satisfied with what I've produced and I enjoy discovering and implementing unique methods to achieve my goals.  <br>I'm based in Melbourne and open to working onsite or remotely. Thanks for visiting my website.  If you'd like to know more about me feel free to reach out for a coffee and a chat.
                </p> 
            `
        },
        {
            title: "Formal training",
            body: `
                <p>I've recently completed a Software Engineering Immersive course with General Assembly which covered: 
                <ul>
                    <li> JavaScript and the MERN stack</li>    
                    <li> Python and Django</li>
                    <li>CSS and HTML (custom and frameworks like Bootstrap)</li>
                    <li>Relational and non-relational databases </li>
                    <li>Cloud-sharing platforms like AWS and Cloudinary</li>
                    <li>Web hosting platforms like Heroku and Netlify</li>
                    <li>Version control sites like Git.</li>
                </ul> 
                </p>
            `
        },
        {
            title: "Personal studies",
            body:
            `
                <p>The majority of my studies have been self-directed. I have studied programming passionately in my free time completing various online courses through a number of platforms. This includes:
                    <ul>
                        <li>CS50 - a computer science course through HarvardX,</li>
                        <li> C# Fundamentals - Microsoft Learn,</li>
                        <li>100 days of Code - a Python course through Udemy,</li> 
                        <li>and a number of Unity game design courses; the scene in the video below was built using C# and the Unity Game Engine.</li>
                    </ul>
                </p>
            `
        },
        {
            title: "Professional experience",
            body: 
            `
                <p>I have <a href="https://www.monashfodmap.com/online-training/fodmap-dietitians-directory/" target="_blank">commercial experience</a> working with the Monash University FODMAP team using the following technologies:
                    <ul>
                        <li>Python/Django</li>
                        <li>Wagtail</li>
                        <li>Google Maps API</li>
                        <li>SCSS</li>
                        <li>HTML/CSS</li>
                    </ul>
                </p>
                <p>I also spent many years at the Victorian Auditor-General's Office creating HTML versions of their audit reports.  This <a href="https://www.audit.vic.gov.au/report/annual-plan-2019-20" target="_blank">Annual Plan</a> is one of the many reports I adapted for online publication, ensuring accessibility, responsiveness, and user-friendly navigation for a wide audience.
                </p>
            `
        }

    ]

    // const [ cardInfo, setCardInfo ] = useState(information.map(info => info.body))
    const [ currentCardInfo, setCurrentCardInfo ] = useState(information[0].body)
    const [ activeIndex, setActiveIndex ] = useState(0);

    function handleButtonClick(index){
        setActiveIndex(index)
        setCurrentCardInfo(information[index].body)
    }


    return (
        <>
            <div className="container mt-2 pt-4 mb-2 pt-4">
                <div className='heading-container'>
                    <h1>Megan Mithen</h1>
                </div>
                <hr></hr>
                <div id="info-container">
                    <div id="button-container">
                        {information.map((info, index) => 
                            <button 
                                key={index} 
                                id={`button-style-${index}`} 
                                className={index === activeIndex ? "active" : ""}
                                onClick={() => handleButtonClick(index)}
                            >
                                <p className="button-text">{info.title}</p>
                            </button>
                        )}
                    </div>
                    <div id="body-container">
                        <div dangerouslySetInnerHTML={{__html: currentCardInfo}} />
                    </div>
                </div>
                <div align="center" id="video-container">
                    <ReactPlayer url="https://youtu.be/bcKXhNcOtkA" />
                </div>
            </div>
        </>
    )
}

export default Home


{/* <div id="home" className="container mt-2 pt-4">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1>Megan Mithen</h1>
                            <hr></hr>
                            <p> I'm a junior software developer with a passion for back-end programming.  </p>
                            <p>
                            I've recently completed a Software Engineering Immersive course with General Assembly which covered: 
                            <ul>
                                <li> JavaScript and the MERN stack</li>    
                                <li> Python and Django</li>
                                <li>CSS and HTML (custom and frameworks like Bootstrap)</li>
                                <li>Relational and non-relational databases </li>
                                <li>Cloud-sharing platforms like AWS and Cloudinary</li>
                                <li>Web hosting platforms like Heroku and Netlify</li>
                                <li>Version control sites like Git.</li>
                            </ul> 
                            </p>
                            <p>
                            Prior to General Assembly, the majority of my studies have been self-directed. I have studied programming passionately in my free time completing various online courses through a number of platforms. This includes:
                            <ul>
                                <li>CS50 - a computer science course through HarvardX,</li>
                                <li> C# Fundamentals - Microsoft Learn,</li>
                                <li>100 days of Code - a Python course through Udemy,</li> 
                                <li>and a number of Unity game design courses; the scene in the video below was built using C# and the Unity Game Engine.</li>
                            </ul>
                            </p>

                            <p>I have <a href="https://www.monashfodmap.com/online-training/fodmap-dietitians-directory/" target="_blank">commercial experience</a> working with the following technologies:
                            <ul>
                                <li>Python/Django</li>
                                <li>Wagtail</li>
                                <li>Google Maps API</li>
                                <li>SCSS</li>
                                <li>HTML/CSS</li>
                            </ul>
                            </p>

                            <p>
                            I think my strengths lie in my passion for problem-solving, my attention to detail and my belief that every piece of work that has my name against it is a reflection of my character.  I work hard until I'm satisfied with what I've produced and I enjoy discovering and implementing unique methods to achieve my goals.<br />
                            </p>
                            <p>
                            I'm based in Melbourne and open to working onsite or remotely. Thanks for visiting my website.  If you'd like to know more about me feel free to reach out for a coffee and a chat.</p>
                            
                        </div> */}