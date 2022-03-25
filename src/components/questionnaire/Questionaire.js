/* eslint-disable max-len */
/* eslint-disable array-callback-return  */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable indent */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import BlogImages from '../blob-images/BlogImages';
import './Questionaire.css';

function Questionaire({ questions }) {
  // const answersArray = [];
  // answersArray.push({
  //   id: correctAnswer,
  //   correctAnswer: true,
  //   title: correctAnswer,
  //   clicked: false,
  // });
  // incorrectAnswers.map((incorrectAnswer) => (
  //   answersArray.push({
  //     id: incorrectAnswer,
  //     correctAnswer: false,
  //     title: incorrectAnswer,
  //     clicked: false,
  //   })
  // ));
  const answerArray = [];
  questions.map((question, index) => (
    answerArray.push({
      id: nanoid(),
      title: question.correct_answer,
      question: index,
      clicked: false,
    })
  ));

  questions.map((question, index) => {
    for (let i = 0; i < question.incorrect_answers.length; i += 1) {
      answerArray.push({
        id: nanoid(),
        title: question.incorrect_answers[i],
        question: index,
        clicked: false,
      });
    }
  });

  const [answers] = useState(answerArray);
  console.log(answers);

  // function clickAnswer(id) {
  //   return setAnswers((answer) => answer.map((answer) => (
  //     answer.id === id || answer.clicked === true ? { ...answer, clicked: !answer.clicked }
  //       : answer
  //   )));
  // }

  const quiz = questions.map((question, index) => (
    <div className="quiz" key={question.question}>
      <h1 className="quiz-heading">{question.question}</h1>
      <div className="quiz-answers">
        { answers.map((answer) => (
          answer.question === index ? <div key={answer.id} className={question.clicked ? 'className' : 'answers'} /* onClick={() => clickAnswer(answersArray.id)} */ aria-hidden="true">{answer.title}</div> : ''
        )) }
      </div>
    </div>
  ));

  return (
    <div>
      <BlogImages />
      { quiz }
    </div>
  );
}

Questionaire.propTypes = {
  questions: PropTypes.isRequired,
};

export default Questionaire;
