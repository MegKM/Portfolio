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
                            <p> I'm a junior software developer with a passion for back-end programming.  
                            The majority of my studies have been self-directed, I have studied programming passionately in my free time completing various online courses through a number of platforms. This includes:
                            <ul>
                                <li>CS50 - a computer science course through HarvardX</li>
                                <li> C# Fundamentals - Microsoft Learn</li>
                                <li>100 days of Code - a Python course through Udemy,</li> 
                                <li>and a number of Unity game design courses; the scene in the video below was built using C# and the Unity Game Engine.</li>
                                 </ul>
                            <p>
                            I've recently completed a 12-week Software Engineering Immersive course through General Assembly, through which I have further expanded my knowledge of HTML and CSS, learned JavaScript and the MERN stack as well as revisiting Python and adding Django into the mix.</p>
                            <p>
                            I think my strengths lie in my passion for problem-solving, my attention to detail and my belief that every piece of work that has my name against it is a reflection of my character.  I work hard until I'm satisfied with what I've produced and I enjoy discovering and implementing unique methods to achieve my goals.<br />
                            </p>
                            <p>
                            I'm based in Melbourne and open to working onsite or remotely. Thanks for visiting my website.  If you'd like to know more about me feel free to reach out for a coffee and a chat.</p>
                            </p>
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