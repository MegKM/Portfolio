import { useState, useEffect } from 'react'
import GameCard from '../gameCard/GameCard'
import './games.css'

function GamesPage(){
    const [ quote, setQuote ] = useState("");
    const [ quoteSayer, setQuoteSayer ] = useState("");
    const [ joke, setJoke ] = useState("");
    const [ punchline, setPunchline ] = useState("");
    const [ showPunchline, setShowPunchline ] = useState(false);

    useEffect(() => {
        getJoke();
        // getQuote();
    }, []);

    async function getJoke(){
        let request = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
        let data = await request.json();

        setJoke(data.setup);
        setPunchline(data.punchline);
        setShowPunchline(false);
    }

    // async function getQuote(){
    //     let request = await fetch('https://zenquotes.io/api/quotes');
    //     let data = await request.json();

    //     setQuote(data[0].q)
    //     setQuoteSayer(data[0].a)
    //     console.log(data);
    // }

    function revealPunchline(){
        setShowPunchline(true);
    }

    const games = [
        {
            name: "Hangman",
            active: true,
            description: "The traditional hangman game.  Use your keyboard to select letters and try to guess the correct word before it's too late!",
            link: "Click here to play the game.",
        },
        {
            name: "Quiz",
            active: true,
            description: "Utilizing Open Trivia DB's API, select a category and difficulty then try your best to get 10/10.",
            link: "Click here to take a 10-question quiz"
        }
    ]

    return (
        <>
        <div id="games" className="container pt-4">
            <div className='heading-container'>
                <h1>Games & such</h1>
            </div>
            <hr></hr>
            <div id="games-welcome">
                <h4>Welcome</h4>
                <p>This section of the site is me playing around with code and API calls. That's all.</p>
            </div>
            <hr></hr>
            <div className="card-group">
                {games.map((game, index) => <GameCard game={game} key={index} />)}
            </div>
            <hr></hr>
            <div className="joke-quote">
                {/* <div className="quote">
                    <h5>Quote of the day</h5>
                    <p>{ quote }</p>
                    <p>-{ quoteSayer }</p>
                </div> */}
                <div className="joke">
                    <h5>Joke town</h5>
                    <div id="joke">{ joke }</div>
                    <button className="btn btn-dark mb-2 mt-2"onClick={ revealPunchline }>
                        <img src="/big_grin.png"></img>
                    </button>
                    {showPunchline && 
                        <div id="punchline"> 
                            <p>{ punchline }</p>
                            <button className="btn btn-dark" onClick={ getJoke }>Get new joke</button>
                        </div>}
                </div>

            </div>
        </div>
        </>
    )
}

export default GamesPage