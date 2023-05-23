import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../utils/randomNumber.js';
import getUserName from '../cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

function rightAnswerProgression {

}

function progression() {
  console.log('What number is missing in the progression?');

  const progressionLength = getRandomIntInclusive(5, 10); //  5 7 9 11 13 15 17 19 21 23
  const progressionIncr = getRandomIntInclusive(1, 15); // Incr=Increase 15



  const correctAnswer = rightAnswerProgression(secretNumb);
  const usrAnswer = readlineSync.question('Your answer: ')
  if (usrAnswer === correctAnswer) {
  } else {
    console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  }
}
export default progression
