import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BlogImages from '../blob-images/BlogImages';
import './Questionaire.css';

function Questionaire({ question, incorrectAnswers, correctAnswer }) {
  const answersArray = [];
  answersArray.push({
    id: correctAnswer,
    answer: true,
    title: correctAnswer,
    clicked: false,
  });
  incorrectAnswers.map((incorrectAnswer) => (
    answersArray.push({
      id: incorrectAnswer,
      answer: false,
      title: incorrectAnswer,
      clicked: false,
    })
  ));

  const [answers, setAnswers] = useState(answersArray);

  function clickAnswer(id) {
    return setAnswers((answer) => answer.map((answer) => (
      answer.id === id || answer.clicked === true ? { ...answer, clicked: !answer.clicked }
        : answer
    )));
  }

  const renderedAnswersArray = answers.map((answersArray) => (
    answersArray.clicked
      ? <div key={answersArray.id} className="clicked" onClick={() => clickAnswer(answersArray.id)} aria-hidden="true">{answersArray.title}</div>
      : <div key={answersArray.id} className="answers" onClick={() => clickAnswer(answersArray.id)} aria-hidden="true">{answersArray.title}</div>
  ));

  return (
    <div>
      <BlogImages />
      <div className="quiz">
        <h1 className="quiz-heading">{question}</h1>
        <div className="quiz-answers">
          { renderedAnswersArray }
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
