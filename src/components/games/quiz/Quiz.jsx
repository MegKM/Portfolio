import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './quiz.css'

function Quiz(){

    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy");
    const navigate = useNavigate();

    function decodeHTML(html) {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.documentElement.textContent;
    }

    async function sendApiRequest(){
        let response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        let data = await response.json();
        data.results.forEach(element => {
            element["players_choice"] = ""
            element["question"] = decodeHTML(element["question"])
            element["corrent_answer"] = decodeHTML(element["correct_answer"])
            element["incorrect_answers"] = element["incorrect_answers"].map( answer => {
                const decodedAnswer = decodeHTML(answer)
                return decodedAnswer;                
            })
            
        })
        redirect(data);
    }

    function redirect(data){
        navigate("/games/quiz/question", {state: data});
    }

    function handleCategoryChange(event){
        setCategory(parseInt(event.target.value));
    }

    function handleDifficultyChange(event){
        setDifficulty(event.target.value);
    }

    return(
        <div className="container mt-2 pt-4" id="quiz-conatiner">
            <div className='heading-container'>
                <h1>Quiz</h1>
            </div>
            <div id="quiz-options-container" align="center">
                <p className='quiz-text shaded'>Select category</p>
                <select className="form-select" onChange={handleCategoryChange} id="category">
                    <option value="9">General Knowledge</option>
                    <option value="27">Animals</option>
                    <option value="25">Art</option>
                    <option value="10">Books</option>
                    <option value="26">Celebrities</option>
                    <option value="23">History</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="17">Science & Nature</option>
                </select>
                <p className='quiz-text shaded'>Select difficulty</p>
                <select className="form-select" onChange={handleDifficultyChange} id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="mt-3">
                <button className="quiz-button btn btn-dark" onClick={sendApiRequest}>Get questions</button>
            </div>
        </div>
    )

}

export default Quiz;