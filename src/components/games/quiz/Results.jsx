import { useLocation, useNavigate } from 'react-router-dom';
import ResultsCard from './ResultsCard';

function Results(){
    const { state } = useLocation();
    const navigate = useNavigate();
    let total_score = 0

    const { questions } = state;

    questions.forEach(element => {
        if(element.correct_answer === element.players_choice){
            total_score += 1
        }
    });

    function restartQuiz(){
        navigate("/games/quiz")
    }
    
    return (
        <div className="container pt-4">
            <h1>Results</h1>
            <h2>{total_score}/10</h2>
            <div>
                {questions.map((question, index) => <ResultsCard question={question} key={index} />)}
            </div>
            <button className='btn btn-dark' onClick={restartQuiz}>Play again?</button>
        </div>
    )
}

export default Results;