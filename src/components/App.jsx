import Header from './header/Header'
import Home from './home/Home'
import ProjectsPage from './projects/Projects'
import Contact from './contact/Contact'
import Skills from './skills/Skills'
import Games from './games/Games'
import Hangman from './games/hangman/Hangman'
import Quiz from './games/quiz/Quiz'
import Question from './games/quiz/Question'
import Results from './games/quiz/Results'
import {Routes, Route} from 'react-router-dom'
import '../App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <ProjectsPage /> } />
        <Route path='/skills' element={ <Skills /> } />
        <Route path='/games' element={ <Games />} />
        <Route path='/games/hangman' element={ <Hangman />} />
        <Route path='/games/quiz' element={ <Quiz />} />
        <Route path='/games/quiz/question' element={ <Question />} />
        <Route path='/games/quiz/results' element={ <Results />} />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </>
  )
}

export default App
