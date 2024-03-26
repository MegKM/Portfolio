import { useState, useEffect } from 'react'
import { random_words } from '../../../hangmanWords.js'
import { hangman_pictures } from '../../../hangmanPictures.js'
import { Link } from 'react-router-dom';

function Hangman(){
    const randomWord = Array.from(random_words[Math.floor(Math.random() * random_words.length)]);
        
    const dashedWord = []
    randomWord.forEach(letter => {
        dashedWord.push("_ ")
    })

    const [wordToGuess, setWordToGuess] = useState(randomWord)
    const [onScreenWord, setOnScreenWord] = useState(dashedWord)
    const [wrongGuessesLetters, setWrongGuessesLetters] = useState([])
    const [userMessage, setUserMessage] = useState("Choose a letter")
    const [gameInPlay, setGameInPlay] = useState(true)

    useEffect(() => {
        document.addEventListener('keydown', detectKeyPressed, true)
    }, [])

    const detectKeyPressed = (event) => {
        const keyPressed = event.key;
        if (wordToGuess.includes(keyPressed) && !onScreenWord.includes(keyPressed)){
            dashedWord[wordToGuess.indexOf(keyPressed)] = keyPressed
            const updatedWord = wordToGuess.map((letter) => {
                return letter === keyPressed ? keyPressed : onScreenWord[wordToGuess.indexOf(letter)];
            })     
            setOnScreenWord(updatedWord)
            if(wordToGuess.toString() === updatedWord.toString()){
                setUserMessage("You've won!")
                setGameInPlay(false);
            } else {
                setUserMessage("Correct! Guess another letter.")       
            }
        } else {
            if(wrongGuessesLetters.includes(keyPressed)){
                setUserMessage("You've already guess this letter, try again.")
            } else {
                wrongGuessesLetters.push(keyPressed)
                let newArray = wrongGuessesLetters.map((letter) => {
                    let uppercaseLetter = letter.toUpperCase()
                    return uppercaseLetter 
                })
                setWrongGuessesLetters(newArray)
                setUserMessage("Incorrect, try again.")
                if(wrongGuessesLetters.length >= 7){
                    setUserMessage("Game over!")
                    setGameInPlay(false)
                }
            }
        }
    }

    function refreshPage(){
        location.reload()
    }

    return(
        <>
            <div className="container mt-4">
                <h1>Hangman</h1>
                { wrongGuessesLetters.length < 7 ? (
                <div className='hangman-picture'><img src={hangman_pictures[wrongGuessesLetters.length]}></img></div>
                ) : (
                    <div className='hangman-picture'><img src={hangman_pictures[7]}></img> </div>)
                }
                <h3>{ onScreenWord }</h3>
                <h4>{ userMessage }</h4>
                { gameInPlay ? (
                    <div>
                        <p>Incorrect guesses: { wrongGuessesLetters }</p>
                        <p>Guesses remaining: { 7 - wrongGuessesLetters.length }</p>
                    </div> ) : ( 
                    <div>
                        <p>The word was: {wordToGuess}</p>
                        <button className='btn btn-dark m-4' onClick={ refreshPage }>Play again</button>
                        <Link to={`/games`}><button className='btn btn-dark'>Return to games</button></Link>
                    </div>) 
                }
            </div>
        </>
    )
}

export default Hangman;

