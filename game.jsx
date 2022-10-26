'use strict';

const userAnswers = [];
let userAttempts = null;
let botNumber = null;

function checkCancel(userNumber) {
  if (userNumber === null || userNumber === 0) {
    return true;
  }
  return false;
}

function checkAttemptCount() {
  if (userAttempts === 0) {
    return true;
  }
  return false;
}

function checkUserInput(userNumber) {
  if (userNumber < botNumber) {
    return alert(`Загаданное число больше!`);
  } if (userNumber > botNumber) {
    return alert(`Загаданное число меньше!`);
  } if (userNumber === botNumber) {
    return true;
  }
  return false;
}

const gameFunc = (startRange, endRange) => {
  const userNumber = Number(prompt(
      `Я загадал число от ${startRange} до ${endRange}. Угадаешь? ` +
      `Осталось попыток - ${userAttempts}`));

  if (checkCancel(userNumber)) {
    alert('Вы завершили игру.');
    return;
  }

  if (checkAttemptCount()) {
    alert(`Попытки закончились. Вы проиграли. Загаданное число было` +
    ` ${botNumber}.`);
    return;
  }

  if (checkUserInput(userNumber)) {
    alert(`Поздравляю, вы угадали!`);
    return;
  }

  if (!userAnswers.includes(userNumber)) {
    userAnswers.push(userNumber);
    userAttempts--;
    return gameFunc(startRange, endRange);
  } else {
    alert('Вы уже вводили это число, попытка не сгорает.');
    return gameFunc(startRange, endRange);
  }
};

const defaultSettings = (startRange, endRange) => {
  userAnswers.push(startRange);
  userAnswers.push(endRange);
  userAttempts = Math.floor((endRange - startRange) * 0.3);
  botNumber = Math.floor(Math.random() * (endRange - startRange + 1)) +
  startRange;

  gameFunc(startRange, endRange);
};

defaultSettings(Number(prompt('Укажите первое число:')),
    Number(prompt('Укажите второе число:')));