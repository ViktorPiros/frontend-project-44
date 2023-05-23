import getRandomIntInclusive from '../utils/randomNumber.js';
import startGame from '../utils/logic.js';

function rightAnswerProgression (number, step, length) {
  const line = [];
  for (let i = 0; i < length; i += 1) {
    const element = number + (step * i);
    line.push(element);
  }
  return line;
}

const description = ('What number is missing in the progression?');
const game = () => {
const length = getRandomIntInclusive(5, 10);
const index = getRandomIntInclusive(1, 5);
const step = getRandomIntInclusive(1, 10);
const number = getRandomIntInclusive(2, 20);
const line = rightAnswerProgression(number, step, length);
const answer = line[index];
line[index] = '..';
const request = line.join(' ');
return [request, answer];
}
const start = () => {
  startGame(description, game);
}

export default start;
