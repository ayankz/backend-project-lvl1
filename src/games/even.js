import gameStart from '../index.js';
import getRandomNum from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getCorrectAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const getGameData = () => {
  const randomNumber = getRandomNum(1, 100);
  const question = randomNumber;
  const correctAnswer = getCorrectAnswer(question);
  const gameData = [correctAnswer, question];
  return gameData;
};


export default () => gameStart(description, getGameData);
