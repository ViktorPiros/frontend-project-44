import getRandomIntInclusive from '../utils/randomNumber.js';
import startGame from '../utils/logic.js';

function isGCD(a, b) {
  if (!b) {
    return a;
  }
  return isGCD(b, a % b);
}
const description = ('Find the greatest common divisor of given numbers.');
const game = () => {
    const numb1 = getRandomIntInclusive();
    const numb2 = getRandomIntInclusive();
    const correctAnswer = isGCD(numb1, numb2);
    return [`${numb1} ${numb2}`, correctAnswer];
};
const start = () => {
  startGame(description, game);
}

export default start;
