import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../utils/randomNumber.js';
import getUserName from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

const rightAnswerGCD = (a, b) => {
  let resultA = a;
  let resultB = b;
  while (resultA !== resultB) {
    if (resultA > resultB) {
      resultA -= resultB;
    } else if (resultA < resultB) {
      resultB -= resultA;
    }
  }
  return resultA;
};

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const numb1 = getRandomIntInclusive();
  const numb2 = getRandomIntInclusive();
  const question = `${numb1} ${numb2}`;
  const correctAnswer = rightAnswerGCD(numb1, numb2);
  const usrAnswer = readlineSync.question('Your answer: ');
  if (usrAnswer === correctAnswer) {
    console.log('Correct');
  } else {
    console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  }
  return [question, String(correctAnswer)];
};
gcdGame();
export default gcdGame;
