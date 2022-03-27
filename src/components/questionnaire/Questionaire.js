import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import BlogImages from '../blob-images/BlogImages';
import CorrectAnswersButton from '../correctAnswersButton/CorrectAnswersButton';
import './Questionaire.css';

function Questionaire({ questions }) {
  const answerArray = [];
  questions.map((question, index) => (
    answerArray.push({
      id: nanoid(),
      title: question.correct_answer,
      question: index,
      clicked: false,
      correctAnswer: true,
    })
  ));

  questions.forEach((question, index) => {
    for (let i = 0; i < question.incorrect_answers.length; i += 1) {
      answerArray.push({
        id: nanoid(),
        title: question.incorrect_answers[i],
        question: index,
        clicked: false,
        correctAnswer: false,
      });
    }
  });

  const [answers, setAnswers] = useState(answerArray);
  // const [correctAnswers, setCorrectAnswers] = useState(false);

  function clickAnswer(id, question) {
    return setAnswers((answer) => answer.map((answer) => (
      answer.id === id || (answer.clicked && answer.question) === question
        ? { ...answer, clicked: !answer.clicked }
        : answer
    )));
  }

  // const getCorrectAnswers = () => {
  //   setCorrectAnswers(true);
  // };

  const quiz = questions.map((question, index) => (
    <div className="quiz" key={question.question}>
      <h1 className="quiz-heading">{question.question}</h1>
      <div className="quiz-answers">
        { answers.map((answer) => (
          answer.question === index ? <div key={answer.id} className={answer.clicked ? 'clicked' : 'answers'} onClick={() => clickAnswer(answer.id, answer.question)} aria-hidden="true">{answer.title}</div> : ''
        )) }
      </div>
    </div>
  ));

  return (
    <div>
      <BlogImages />
      { quiz }
      <CorrectAnswersButton /* getCorrectAnswer={getCorrectAnswers} */ />
    </div>
  );
}

Questionaire.propTypes = {
  questions: PropTypes.isRequired,
};

export default Questionaire;
