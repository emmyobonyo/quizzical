import React from 'react';
import PropTypes from 'prop-types';
import './correctAnswersButton.css';

function CorrectAnswersButton({ getCorrectAnswer, resetGame }) {
  return (
    <button className="show-correct" type="button" onClick={getCorrectAnswer}>{ resetGame ? 'Reset Game' : 'Show Correct Answers'}</button>
  );
}

CorrectAnswersButton.propTypes = {
  getCorrectAnswer: PropTypes.isRequired,
  resetGame: PropTypes.bool.isRequired,
};

export default CorrectAnswersButton;
