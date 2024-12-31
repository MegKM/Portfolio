function ResultsCard({question}){
    
    const wrongAnswers = question.incorrect_answers.map(answer => {
        if(answer === question.players_choice){
            return <div className="quiz-result-answer wrong-answer">{answer}</div>
        }
        else {
            return <div className="quiz-result-answer neutral-answer">{answer}</div>
        }
    })


    return(
        <div>
            <hr></hr>
            {question.correct_answer === question.players_choice ? (
                <h3 className="quiz-result-text">Correct</h3>
            ) : <h3 className="quiz-result-text">Incorrect</h3>}
            <p className='quiz-text'>{question["question"]}</p>
            <div className="answers-div">
                { wrongAnswers } 
                <div className="quiz-result-answer correct-answer">{question.correct_answer}</div>
            </div>
        </div>
    )
}

export default ResultsCard