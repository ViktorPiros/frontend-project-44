import getRandomIntInclusive from '../utils/randomNumber.js';
import startGame from '../utils/logic.js';

const description = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = () => {
  const numb = getRandomIntInclusive();
  const correctAnswer = isPrime(numb) ? 'yes' : 'no';
  return [numb, correctAnswer];
};

const start = () => {
  startGame(description, game);
};

export default start;
