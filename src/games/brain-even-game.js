import getRandomIntInclusive from '../utils/randomNumber.js';
import usrName from '../utils/logic.js';
import startGame from '../utils/logic.js';

usrName();

function rightAnswerParity(number) {
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".'
function game() {
const numb = getRandomIntInclusive();
const question = `${numb}`;
const answer = rightAnswerParity(numb);
return [question, answer];
};
const start = () => {
  startGame(description, game());
}
export default start;
