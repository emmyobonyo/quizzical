import React from 'react';
import PropTypes from 'prop-types';
import BlogImages from '../blob-images/BlogImages';
import './Questionaire.css';

function Questionaire({ question, incorrectAnswers, correctAnswer }) {
  const answersArray = [];
  answersArray.push({
    id: correctAnswer,
    answer: true,
    title: correctAnswer,
  });
  incorrectAnswers.map((incorrectAnswer) => (
    answersArray.push({
      id: incorrectAnswer,
      answer: false,
      title: incorrectAnswer,
    })
  ));

  const renderedAnswersArray = answersArray.map((answersArray) => (
    <div key={answersArray.id} className="answers">{answersArray.title}</div>
  ));

  return (
    <div>
      <BlogImages />
      <div className="quiz">
        <h1 className="quiz-heading">{question}</h1>
        <div className="quiz-answers">
          { renderedAnswersArray }
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
