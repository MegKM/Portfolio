import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

let results = 0

function Question(){
    const { state } = useLocation();
    const navigate = useNavigate();

    const [ questionNumber, setQuestionNumber ] = useState(0)
    const [ question, setQuestion ] = useState(state.results[questionNumber])
    const answers = [question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1],question.incorrect_answers[2]]
    const shuffledAnswers = shuffle(answers)

    useEffect(() => {
        setQuestion(state.results[questionNumber]);
    }, [questionNumber, state.results]);

    function shuffle(array){
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function checkAnswer(event){
        question.players_choice = event.target.value;

        if(question.correct_answer === event.target.value){
            results += 1
        }

        if(questionNumber == 9){
            navigate("/games/quiz/results", {state: {questions: state.results, results: results}});
        }
        else{
            setQuestionNumber(prevQuestionNumber => prevQuestionNumber +1);
        }

    }

    const finalQuestion = question.question.replace(/&quot;|&rsquo;|&#039;|&#039;|&ldquo;|&rdquo;/g, match => {
        switch (match) {
            case "&quot;":
            case "&ldquo;":
            case "&rdquo;":
                return '"';
            case "&rsquo;":
            case "&#039;":
                return "'";
        }
    });
    
    return(
        <div className="container mt-2 pt-4">
            <h1>Question {questionNumber + 1}</h1>
            <p>{finalQuestion}</p>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[0]}>{shuffledAnswers[0]}</button>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[1]}>{shuffledAnswers[1]}</button>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[2]}>{shuffledAnswers[2]}</button>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[3]}>{shuffledAnswers[3]}</button>
        </div>
    )
}

export default Question