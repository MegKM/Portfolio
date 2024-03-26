import UseState from 'react'
import GameCard from '../gameCard/GameCard'

function GamesPage(){

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
            <h2>Games</h2>
            <hr></hr>
            <div className="card-group">
                {games.map((game, index) => <GameCard game={game} key={index} />)}
            </div>
        </div>
        </>
    )
}

export default GamesPage