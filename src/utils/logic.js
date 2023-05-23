#!/usr/src/utils/env node
import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const startGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [number, answer] = game();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
