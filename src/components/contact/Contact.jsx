function Contact(){
    return (
        <div id="contact" className="container pt-4">
            <div className="heading-container">
                <h1>Contact</h1>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-4">
                    <img src="/megan.png"  style={{width: '300px', borderRadius: '25%'}}></img>
                </div>
                <div className="col">
                    <p>Check out my projects on GitHub<br/ >
                    <a href="https://github.com/MegKM" target="_blank">GitHub</a><br/ ></p>

                    <p>View my profile on LinkedIn<br/ >
                    <a href="https://www.linkedin.com/in/megan-mithen-415768276/" target="_blank">LinkedIn</a><br/ ></p>

                    <p>If you have any questions or would like to grab a coffee and have a chat, feel free to email me<br/ >
                    <a href="mailto:megankmithen@gmail.com" target="_blank">Email</a></p>
                </div>
            </div>
        </div>
    )

}

export default Contact