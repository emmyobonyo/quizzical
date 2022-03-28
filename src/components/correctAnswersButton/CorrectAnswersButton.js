import React from 'react';
import PropTypes from 'prop-types';

function CorrectAnswersButton({ getCorrectAnswer }) {
  return (
    <button className="showCorrect" type="button" onClick={getCorrectAnswer}>CorrectAnswersButton</button>
  );
}

CorrectAnswersButton.propTypes = {
  getCorrectAnswer: PropTypes.isRequired,
};

export default CorrectAnswersButton;
