import UseState from 'react'
import GameCard from '../gameCard/GameCard'

function GamesPage(){

    const games = [
        {
            name: "Hangman",
            active: true,
            description: "Click here to play the game.",
            background: "hangman_image.png"
        },
        {
            name: "Codebreaker",
            active: false,
            description: "Coming soon"
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