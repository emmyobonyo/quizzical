import PropTypes from 'prop-types';
import './welcomePage.css';
import BlogImages from '../blob-images/BlogImages';

function WelcomePage({ startQuiz }) {
  return (
    <div>
      <BlogImages />
      <div className="welcome-page">
        <div>
          <h1 className="heading">Quizzical</h1>
          <p>Test your knowledge of common quizzes</p>
          <button type="button" className="start-game-button" onClick={startQuiz}>Start Game</button>
        </div>
      </div>
    </div>
  );
}

WelcomePage.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default WelcomePage;
