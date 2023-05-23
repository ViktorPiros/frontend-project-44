import getRandomIntInclusive from '../utils/randomNumber.js';
import startGame from '../utils/logic.js';

const actions = ['+', '-', '*'];
const randomAction = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

const calculator = (a, b, action) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('error');
  }
}

const description = ('What is the result of the expression?');
const game = () => {
  const numb1 = getRandomIntInclusive();
  const numb2 = getRandomIntInclusive();
  const action = randomAction(actions);
  const result = calculator(numb1, numb2, action);
  return [`${numb1} ${action} ${numb2}`, result];
};
const start = () => {
  startGame(description, game);
}

export default start;












//function calc() {
  //function calcSum() {
    //console.log('What is the result of the expression?');
    //const numb1 = getRandomIntInclusive(10);
    //const numb2 = getRandomIntInclusive(10);
    //console.log(`Question: ${numb1} + ${numb2}`);
    //const correctAnswerSum = rightAnswerSum(numb1, numb2);
    //const usrAnswer = readlineSync.question('Your answer: ');
    //if (usrAnswer === String(correctAnswerSum)) {
      //console.log('Correct');
    //} else {
      //console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswerSum}`);
    //}
  //}
  //calcSum();

  //function calcWork() {
    //const numb1 = getRandomIntInclusive(10);
    //const numb2 = getRandomIntInclusive(10);
    //console.log(`Question: ${numb1} * ${numb2}`);
    //const correctAnswerProduct = rightAnswerProduct(numb1, numb2);
    //const usrAnswer = readlineSync.question('Your answer: ');
    //if (usrAnswer === String(correctAnswerProduct)) {
      //console.log('Correct');
    //} else {
      //console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswerProduct}`);
    //}
  //}
  //calcWork();

  //function calcDifference() {
    //const numb1 = getRandomIntInclusive(10);
    //const numb2 = getRandomIntInclusive(10);
    //console.log(`Question: ${numb1} - ${numb2}`);
    //const correctAnswerDifference = rightAnswerDifference(numb1, numb2);
    //const usrAnswer = readlineSync.question('Your answer: ');
    //if (usrAnswer === String(correctAnswerDifference)) {
      //console.log('Correct');
    //} else {
      //console.log(`${usrAnswer} is wrong answer ;(. Correct answer was ${correctAnswerDifference}`);
    //}
    //console.log(`Congratulations,${usrName}`);
  //}
  //calcDifference();
//}
//export default calc;
