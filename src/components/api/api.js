const questions = [];
fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
  .then((res) => res.json())
  .then((data) => questions.push(data.results))

export default questions;