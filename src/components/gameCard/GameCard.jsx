import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({game}){
    const gameExists = game.active;

    return(
        <>
            <div className="card game-card p-5 m-2"  style={{ 
                backgroundColor: '#d1d1ee'}}>
                { gameExists ? (
                <div className="card-body">
                    <h3 className="card-title">{game.name}</h3>
                    <p>{game.description}</p>
                <Link to={`/games/${game.name}`}>
                    <p className='game-links'>{game.link}</p>
                    </Link> 
                </div>
                ) : (
                    <div className="card-body">
                        <h5 className="card-title">{game.name}</h5>
                        <p>{game.description}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default GameCard