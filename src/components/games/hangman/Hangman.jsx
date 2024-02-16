import { useState, useEffect } from 'react'
import { random_words } from '../../../hangmanWords.js'

function Hangman(){
    const randomWord = Array.from(random_words[Math.floor(Math.random() * random_words.length)]);
    const wordLength = randomWord.length
    let keyPressed = ""
    
    const initialWord = []

    randomWord.forEach(letter => {
        initialWord.push("_ ")
    })

    const [wordToGuess, setWordToGuess] = useState(randomWord)
    const [onScreenWord, setOnScreenWord] = useState(initialWord)

    useEffect(() => {
        document.addEventListener('keydown', detecKeyPressed, true)
    }, [])

    const detecKeyPressed = (event) => {
        keyPressed = event.key;
        if (wordToGuess.includes(keyPressed)){
            console.log("True")
            console.log(wordToGuess.indexOf(keyPressed))
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

export default Hangman