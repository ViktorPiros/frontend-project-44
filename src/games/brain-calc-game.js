import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../utils/randomNumber.js';
import usrName from '../utils/logic.js';

usrName();

function rightAnswerSum(number1, number2) {
  const rightAnswer = number1 + number2;
  return rightAnswer;
}

function rightAnswerProduct(number1, number2) {
  const rightAnswer = number1 * number2;
  return rightAnswer;
}

function rightAnswerDifference(number1, number2) {
  const rightAnswer = number1 - number2;
  return rightAnswer;
}

function calc() {
  function calcSum() {
    console.log('What is the result of the expression?');
    const numb1 = getRandomIntInclusive(10);
    const numb2 = getRandomIntInclusive(10);
    console.log(`Question: ${numb1} + ${numb2}`);
    const correctAnswerSum = rightAnswerSum(numb1, numb2);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (usrAnswer === String(correctAnswerSum)) {
      console.log('Correct');
    } else {
      console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswerSum}`);
    }
  }
  calcSum();

  function calcWork() {
    const numb1 = getRandomIntInclusive(10);
    const numb2 = getRandomIntInclusive(10);
    console.log(`Question: ${numb1} * ${numb2}`);
    const correctAnswerProduct = rightAnswerProduct(numb1, numb2);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (usrAnswer === String(correctAnswerProduct)) {
      console.log('Correct');
    } else {
      console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswerProduct}`);
    }
  }
  calcWork();

  function calcDifference() {
    const numb1 = getRandomIntInclusive(10);
    const numb2 = getRandomIntInclusive(10);
    console.log(`Question: ${numb1} - ${numb2}`);
    const correctAnswerDifference = rightAnswerDifference(numb1, numb2);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (usrAnswer === String(correctAnswerDifference)) {
      console.log('Correct');
    } else {
      console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswerDifference}`);
    }
    console.log(`Congratulations,${usrName}`);
  }
  calcDifference();
}
export default calc;
