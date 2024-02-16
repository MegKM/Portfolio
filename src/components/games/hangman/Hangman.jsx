import { useState, useEffect } from 'react'
import { random_words } from '../../../hangmanWords.js'

function Hangman(){
    const randomWord = Array.from(random_words[Math.floor(Math.random() * random_words.length)]);
    const wordLength = randomWord.length;
        
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
                console.log(gameInPlay)
            } else {
                setUserMessage("Correct! Guess another letter.")       
            }
        } else {
            if(wrongGuessesLetters.includes(keyPressed)){
                setUserMessage("You've already guess this letter, try again.")
            } else {
                wrongGuessesLetters.push(keyPressed)
                let newArray = wrongGuessesLetters.map((letter) => {
                    return letter 
                })
                setWrongGuessesLetters(newArray)
                setUserMessage("Incorrect, try again.")
            }
        }
    }

    function refreshPage(){
        location.reload()
    }

    return(
        <>
            <div className="container mt-4">
                <h1>Hangman coming soon</h1>
                <p>{ wordToGuess }</p>
                <p>{ onScreenWord }</p>
                <p>{ userMessage }</p>
                { gameInPlay ? (
                    <div>
                        <p>Incorrect guesses: { wrongGuessesLetters }</p>
                        <p>Number of incorrect guesses: {wrongGuessesLetters.length}</p>
                    </div> ) : ( 
                    <div>
                        <button className='btn btn-dark' onClick={ refreshPage }>Play again?</button>
                    </div>) 
                }
            </div>
        </>
    )
}

export default Hangman;

