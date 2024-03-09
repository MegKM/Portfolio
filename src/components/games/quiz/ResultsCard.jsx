function ResultsCard({question}){
    
    const wrongAnswers = question.incorrect_answers.map(answer => {
        if(answer === question.players_choice){
            return <button className="btn btn-danger">{answer}</button>
        }
        else {
            return <button className="btn">{answer}</button>
        }
    })

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
        <div>
            <hr></hr>
            {question.correct_answer === question.players_choice ? (
                <h3>Correct</h3>
            ) : <h3>Incorrect</h3>}
            <p>{finalQuestion}</p>
            <p>{wrongAnswers} <button className="btn btn-success">{question.correct_answer}</button></p>

        </div>
    )
}

export default ResultsCard