import getRandomIntInclusive from '../utils/randomNumber.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numb = getRandomIntInclusive();
console.log(`Question: ${numb}`);
function rightAnswerParity() {
  const rightAnswer = numb % 2 === 0 ? 'yes' : 'no';
    
}
console.log(`Your answer: ${rightAnswerParity}`);
