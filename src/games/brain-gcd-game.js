import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../utils/randomNumber.js';
import getUserName from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

function rightAnswerGCD(a, b) {
  if (!b) {
    return a;
  }
  return rightAnswerGCD(b, a % b);
}

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const numb1 = getRandomIntInclusive();
  const numb2 = getRandomIntInclusive();
  console.log(`Question: ${numb1} ${numb2}`);
  const correctAnswer = rightAnswerGCD(numb1, numb2);
  const usrAnswer = readlineSync.question('Your answer: ');
  if (usrAnswer === String(correctAnswer)) {
    console.log('Correct');
  } else {
    console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  }
};
gcdGame();
export default gcdGame;
