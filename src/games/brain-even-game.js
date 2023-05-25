import getRandomIntInclusive from '../utils/randomNumber.js';
import startGame from '../utils/logic.js';

function isEven(number) {
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
}
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = () => {
  const numb = getRandomIntInclusive();
  const question = `${numb}`;
  const answer = isEven(numb);
  return [question, answer];
};
const start = () => {
  startGame(description, game);
};
export default start;
