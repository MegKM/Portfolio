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

    useEffect(() => {
        document.addEventListener('keydown', detecKeyPressed, true)
    }, [])

    const detecKeyPressed = (event) => {
        const keyPressed = event.key;
        if (wordToGuess.includes(keyPressed) && !onScreenWord.includes(keyPressed)){
            dashedWord[wordToGuess.indexOf(keyPressed)] = keyPressed
            console.log(dashedWord)
            const updatedWord = wordToGuess.map((letter) => {
                return letter === keyPressed ? keyPressed : onScreenWord[wordToGuess.indexOf(letter)];
            })     
            setOnScreenWord(updatedWord)       
        } else {
            setWrongGuessesLetters(wrongGuessesLetters.push(keyPressed))
            console.log(wrongGuessesLetters)
        }

    }

    return(
        <>
            <div className="container mt-4">
                <h1>Hangman coming soon</h1>
                <p>{ wordToGuess }</p>
                <p>{ onScreenWord }</p>
            </div>
        </>
    )
}

export default Hangman;

