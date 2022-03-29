/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { decode } from 'html-entities';
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

  const randomAnswersArray = answerArray.sort(() => Math.random() - 0.5);

  const [answers, setAnswers] = useState(randomAnswersArray);
  const [correctAnswers, setCorrectAnswers] = useState(false);

  function clickAnswer(id, question) {
    return setAnswers((answer) => answer.map((answer) => (
      answer.id === id || (answer.clicked && answer.question) === question
        ? { ...answer, clicked: !answer.clicked }
        : answer
    )));
  }

  const getCorrectAnswers = () => {
    let correctAnswersCount = 0;
    answers.forEach((answer) => {
      if (answer.correctAnswer && answer.clicked) {
        correctAnswersCount += 1;
      }
    });
    const paragraph = document.createElement('p');
    paragraph.className = 'parahraph';
    paragraph.innerHTML = `You have got ${correctAnswersCount}/5 ${correctAnswersCount === 1 ? 'answer' : 'answers'} correct`;
    const div = document.getElementById('correct-answers');
    div.appendChild(paragraph);
    setCorrectAnswers(true);
  };

  const quiz = questions.map((question, index) => (
    <div className="quiz" key={question.question}>
      <h1 className="quiz-heading">{decode(question.question)}</h1>
      <div className="quiz-answers">
        { !correctAnswers && answers.map((answer) => (
          answer.question === index ? <div key={answer.id} className={answer.clicked ? 'clicked' : 'answers'} onClick={() => clickAnswer(answer.id, answer.question)} aria-hidden="true">{answer.title}</div> : ''
        )) }
        { correctAnswers && answers.map((answer) => (
          answer.question === index ? <div key={answer.id} className={answer.correctAnswer ? 'correct-answer' : answer.clicked ? 'show-wrong-answer' : 'wrong-answers'} onClick={() => clickAnswer(answer.id, answer.question)} aria-hidden="true">{answer.title}</div> : ''
        )) }
      </div>
      <hr className="horizontal-line" />
    </div>
  ));

  return (
    <div>
      <BlogImages />
      <div className="quiz-container">
        { quiz }
        <div id="correct-answers" className="correct-answers-div">
          <CorrectAnswersButton getCorrectAnswer={getCorrectAnswers} resetGame={correctAnswers} />
        </div>
      </div>
    </div>
  );
}

Questionaire.propTypes = {
  questions: PropTypes.isRequired,
};

export default Questionaire;
