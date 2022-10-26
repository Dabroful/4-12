'use strict';

const myArr = [];
let checkSum = null;

const randomGenArr = (arr) => {
  const randomNumber = Math.floor(Math.random() * 10); 
  arr.push(randomNumber);
  checkSum = arr.reduce((a, b) => a + b);
  if (checkSum < 50) {
    return randomGenArr(arr);
  } else return arr;
};

randomGenArr(myArr);
console.log(checkSum);