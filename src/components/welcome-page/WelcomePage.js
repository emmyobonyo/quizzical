import React from 'react';
import PropTypes from 'prop-types';
import './welcomePage.css';
import blobTop from '../../images/blobs.png';
import blobBottom from '../../images/blobs1.png';

function WelcomePage({ startQuiz }) {
  return (
    <div>
      <img src={blobTop} className="blob-top" alt="top-blob" />
      <div className="welcome-page">
        <div>
          <h1>Quizzical</h1>
          <p>Test your knowledge of common quizzes</p>
          <button type="button" className="start-game-button" onClick={startQuiz}>Start Game</button>
        </div>
      </div>
      <img src={blobBottom} className="blob-bottom" alt="bottom-blob" />
    </div>
  );
}

WelcomePage.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default WelcomePage;
