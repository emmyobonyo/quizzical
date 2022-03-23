/* eslint-disable  react/no-array-index-key */
import WelcomePage from './components/welcome-page/WelcomePage';
import questions from './components/api/api';
import './App.css';

function App() {
  return (
    <div>
      <WelcomePage />
      { questions[0].map((question, index) => (
        <p key={index}>{question.question}</p>
      )) }
    </div>
  );
}

export default App;
