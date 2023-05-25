import getRandomIntInclusive from '../utils/randomNumber.js';
import startGame from '../utils/logic.js';

const actions = ['+', '-', '*'];
const randomAction = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

const calculator = (a, b, action) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('error');
  }
};

const description = ('What is the result of the expression?');
const game = () => {
  const numb1 = getRandomIntInclusive();
  const numb2 = getRandomIntInclusive();
  const action = randomAction(actions);
  const result = calculator(numb1, numb2, action);
  return [`${numb1} ${action} ${numb2}`, result];
};
const start = () => {
  startGame(description, game);
};

export default start;
