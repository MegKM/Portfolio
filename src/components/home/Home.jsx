import React from 'react'
import ReactPlayer from 'react-player'

function Home(){

    return (
        <>
            <div id="home" className="container mt-2 pt-4">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1>Megan Mithen</h1>
                            <hr></hr>
                            <p> I'm a junior software developer with a passion for back-end programming.  </p>
                            <p>
                            I've recently completed a Software Engineering Immersive course with General Assembly which covered: </p>
                            <ul>
                                <li> JavaScript and the MERN stack</li>    
                                <li> Python and Django</li>
                                <li>CSS and HTML (custom and frameworks like Bootstrap)</li>
                                <li>Relational and non-relational databases </li>
                                <li>Cloud-sharing platforms like AWS and Cloudinary</li>
                                <li>Web hosting platforms like Heroku and Netlify</li>
                                <li>Version control sites like Git.</li>
                            </ul> 
                            <p>
                            Prior to General Assembly, the majority of my studies have been self-directed. I have studied programming passionately in my free time completing various online courses through a number of platforms. This includes:
                            <ul>
                                <li>CS50 - a computer science course through HarvardX,</li>
                                <li> C# Fundamentals - Microsoft Learn,</li>
                                <li>100 days of Code - a Python course through Udemy,</li> 
                                <li>and a number of Unity game design courses; the scene in the video below was built using C# and the Unity Game Engine.</li>
                            </ul>
                            </p>
                            <p>
                            I think my strengths lie in my passion for problem-solving, my attention to detail and my belief that every piece of work that has my name against it is a reflection of my character.  I work hard until I'm satisfied with what I've produced and I enjoy discovering and implementing unique methods to achieve my goals.<br />
                            </p>
                            <p>
                            I'm based in Melbourne and open to working onsite or remotely. Thanks for visiting my website.  If you'd like to know more about me feel free to reach out for a coffee and a chat.</p>
                            
                        </div>
                        <div align="center">
                            <ReactPlayer url="https://youtu.be/bcKXhNcOtkA" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home