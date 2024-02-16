import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({game}){
    const gameExists = game.active;

    return(
        <>
            <div className="card p-5 m-2"  style={{ 
                backgroundImage: `url(${game.background})`, 
                backgroundRepeat: 'norepeat',
                backgroundSize: 'cover'}}>
                { gameExists ? (
                <div className="card-body">
                    <h3 className="card-title">{game.name}</h3>
                <Link to={`/games/${game.name}`}>
                    <p className='game-links'>{game.description}</p>
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