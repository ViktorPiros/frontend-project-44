#!/usr/src/utils/env node
import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

function startGame() {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const dataGame = game();
    const question = dataGame[0];
    const answer = dataGame[1];
    console.log(`Question: ${question}`);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (usrAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${answer}\n Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
}

export default startGame;
