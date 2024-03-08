import { useLocation } from "react-router-dom";
import { useState } from "react";

function Question(){
    const { state } = useLocation();
    let score = 0;

    const [ questionNumber, setQuestionNumber ] = useState(0)
    const [ question, setQuestion ] = useState(state.results[questionNumber])
    const answers = [question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1],question.incorrect_answers[2]]
    const shuffledAnswers = shuffle(answers)

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
        console.log("correct answer: " + question.correct_answer)
        console.log("answer selected: " + event.target.value)

        if(question.correct_answer === event.target.value){
            score += 1;
            setQuestionNumber(questionNumber + 1)
            setQuestion(state.results[questionNumber])
            console.log(questionNumber)
            console.log("true")
        }
        else {
            setQuestionNumber(questionNumber + 1)
            setQuestion(state.results[questionNumber])
            console.log("false")
        }
    }

    const replaceQuotes = question.question.replace(/&quot;/g, '"')
    const finalQuestion = replaceQuotes.replace(/&#039;/g, "'")

    console.log(state);
    return(
        <div className="container mt-2 pt-4">
            <h1>Question {questionNumber + 1}</h1>
            <p>{finalQuestion}</p>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[0]}>{shuffledAnswers[0]}</button>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[1]}>{shuffledAnswers[1]}</button>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[2]}>{shuffledAnswers[2]}</button>
            <button className="btn btn-dark m-2" onClick={checkAnswer} value={shuffledAnswers[3]}>{shuffledAnswers[3]}</button>
            {/* <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>
                </div>
            </div> */}

            <p>
            <a class="btn btn-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Answers</a>
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question