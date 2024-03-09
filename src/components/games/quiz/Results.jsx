import { useLocation, useNavigate } from 'react-router-dom';
import ResultsCard from './ResultsCard';

function Results(){
    const { state } = useLocation();
    const navigate = useNavigate();

    const { questions, results } = state;

    function restartQuiz(){
        navigate("/games/quiz")
    }
    
    return (
        <div className="container pt-4">
            <h1>Results</h1>
            <h2>{results}/10</h2>
            <div>
                {questions.map((question, index) => <ResultsCard question={question} key={index} />)}
            </div>
            <button className='btn btn-dark' onClick={restartQuiz}>Play again?</button>
        </div>
    )
}

export default Results;