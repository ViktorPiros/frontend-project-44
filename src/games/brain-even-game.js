import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../utils/randomNumber.js';
import getUserName from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

function rightAnswerParity(number) {
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
}

function even() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numb = getRandomIntInclusive();
  console.log(`Question: ${numb}`);

  const correctAnswer = rightAnswerParity(numb);
  const usrAnswer = readlineSync.question('Your answer: ');
  if (usrAnswer === correctAnswer) {
    console.log('Correct');
  } else {
    console.log('Baka');
  }
}
export default even;
