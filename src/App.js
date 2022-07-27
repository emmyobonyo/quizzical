import { useEffect, useState } from 'react';
import WelcomePage from './components/welcome-page/WelcomePage';
import getQuestions from './components/api/api';
import Questionaire from './components/questionnaire/Questionaire';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [welcomePage, setWelcomePage] = useState(true);

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(data.results);
    });
  }, []);

  const startQuiz = () => {
    setWelcomePage((welcomePage) => !welcomePage);
  };

  return (
    <div>
      { welcomePage ? <WelcomePage startQuiz={startQuiz} />
        : <Questionaire questions={questions} /> }
    </div>
  );
}

export default App;
