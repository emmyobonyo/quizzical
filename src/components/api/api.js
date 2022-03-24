/* eslint-disable no-useless-escape */
async function getQuestions() {
  const response = await fetch('https://opentdb.com/api.php\?amount\=5\&category\=9\&difficulty\=easy\&type\=multiple');
  const data = await response.json();
  return data;
}

export default getQuestions;
