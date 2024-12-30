import { useState, useEffect, useRef } from 'react'
import { random_words } from '../../../hangmanWords.js'
import { hangman_pictures } from '../../../hangmanPictures.js'
import { Link } from 'react-router-dom';
import './hangman.css'

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
    const inputRef = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', detectKeyPressed, true)
    }, [])

    const detectKeyPressed = (event) => {
        let keyPressed = event.key;
        console.log(keyPressed)
        if (keyPressed === "UNIDENTIFIED"){
            // keyPressed = event.keyCode;
            keyPressed = String.fromCharCode(event.keyCode)
            console.log("in function:",  keyPressed)
        }

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && inputRef.current) {
                inputRef.current.focus();
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect(() => {
    //     const handleKeydown = (event) => detectKeyPressed(event);
    //     window.addEventListener("keydown", handleKeydown);
    //     return () => {
    //         window.removeEventListener("keydown", handleKeydown);
    //     };
    // }, [onScreenWord, wordToGuess, wrongGuessesLetters, gameInPlay]);

    function refreshPage(){
        location.reload()
    }

    return(
        <>
            <div className="container mt-4">
                <div className='heading-container'>
                    <h1>Hangman</h1>
                </div>
                <div id="hangman-container">
                    { wrongGuessesLetters.length < 7 ? (
                    <div className='hangman-picture'><img src={hangman_pictures[wrongGuessesLetters.length]}></img></div>
                    ) : (
                        <div className='hangman-picture'><img src={hangman_pictures[7]}></img> </div>)
                    }
                    <div id="hangman-text">
                        <h3>{ onScreenWord }</h3>
                        <h4>{ userMessage }</h4>
                        <input
                            ref={inputRef}
                            type="text"
                            style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} // Invisible
                            aria-hidden="true" // Make it not accessible for screen readers
                        />
                        { gameInPlay ? (
                            <div>
                                <p>Incorrect guesses: { wrongGuessesLetters.join(", ") }</p>
                                <p>Guesses remaining: { 7 - wrongGuessesLetters.length }</p>
                            </div> ) : ( 
                            <div>
                                <p>The word was: {wordToGuess}</p>
                                <div  className="hangman-button-container">
                                    <button className='hangman-button btn btn-dark m-4' onClick={ refreshPage }>Play again</button>
                                    <Link to={`/games`}><button className='hangman-button btn btn-dark'>Return to games</button></Link>
                                </div>
                            </div>) 
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hangman;

