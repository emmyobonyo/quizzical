import React from 'react';
import PropTypes from 'prop-types';
import BlogImages from '../blob-images/BlogImages';
import './Questionaire.css';

function Questionaire({ question, incorrectAnswers, correctAnswer }) {
  const incorrectAnswersList = incorrectAnswers.map((incorrectAnswer) => (
    <div key={incorrectAnswer} className="answers">{incorrectAnswer}</div>
  ));

  return (
    <div>
      <BlogImages />
      <div className="quiz">
        <h1 className="quiz-heading">{question}</h1>
        <div className="quiz-answers">
          { incorrectAnswersList }
          <div className="answers">{ correctAnswer }</div>
        </div>
      </div>
    </div>
  );
}

Questionaire.propTypes = {
  question: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.isRequired,
  correctAnswer: PropTypes.string.isRequired,
};

export default Questionaire;
