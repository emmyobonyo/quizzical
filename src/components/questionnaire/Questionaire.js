import React from 'react';
import PropTypes from 'prop-types';

function Questionaire({ question, keyProp }) {
  return (
    <h1 key={keyProp}>{question}</h1>
  );
}

Questionaire.propTypes = {
  question: PropTypes.string.isRequired,
  keyProp: PropTypes.number.isRequired,
};

export default Questionaire;
