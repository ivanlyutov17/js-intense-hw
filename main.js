const CALC_DATA = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'],
  operators: ['C', '+', '-', '*', '/', '='],
  hardOperators: ['+/-', '->'],
};

const CALC_FIELD = document.getElementById('field');
const NUMBERS_FIELD = document.getElementById('numbers');
const OPERATORS_FIELD = document.getElementById('operators');
const INPUT_FIELD = document.getElementById('input');

let fNum = '';
let sNum = '';
let operator = '';
let finished = false;
let currentNum = fNum;
INPUT_FIELD.value = 0;

function handleClick(e) {
  let value = e.target.innerText;
  if (CALC_DATA.numbers.includes(value)) {
    if (sNum === '' && operator === '') {
      fNum += value;
      INPUT_FIELD.value = fNum;
      currentNum = fNum;
    } else if (sNum !== '' && finished === true) {
      sNum = value;
      finished = false;
      INPUT_FIELD.value = sNum;
      currentNum = sNum;
    } else {
      sNum += value;
      INPUT_FIELD.value = sNum;
      currentNum = sNum;
    }
    return;
  }

  if (CALC_DATA.operators.includes(value) && value !== '=' && operator === '') {
    operator = value;
    INPUT_FIELD.value = operator;
    return;
  } else if (value !== '=') {
    calc();
    operator = value;
  }
  if (value === '=') {
    calc();
  }
}

function calc() {
  if (sNum === '') sNum += fNum;
  switch (operator) {
    case '+':
      fNum = parseFloat((+fNum + +sNum).toFixed(8), 10);
      break;
    case '-':
      fNum = parseFloat((+fNum - +sNum).toFixed(8), 10);
      break;
    case '*':
      fNum = parseFloat((+fNum * +sNum).toFixed(8), 10);
      break;
    case '/':
      if (sNum !== 0) {
        fNum = parseFloat((+fNum / +sNum).toFixed(8), 10);
        break;
      } else {
        INPUT_FIELD.value = Infinity;
      }
  }
  finished = true;
  INPUT_FIELD.value = fNum;
  currentNum = fNum;
  operator = '';
}

function clearAll() {
  fNum = '';
  sNum = '';
  operator = '';
  finished = false;
  INPUT_FIELD.value = 0;
}

function handleHard(e) {
  let value = e.target.innerText;
  if (value === '+/-') {
    currentNum = -currentNum;
    INPUT_FIELD.value = currentNum;
    if (sNum === '') {
      fNum = currentNum;
    } else if (-fNum === currentNum) {
      fNum = currentNum;
    } else {
      sNum = currentNum;
    }
  }
  if (value === '->' && finished === false) {
    currentNum = currentNum.toString().slice(0, -1);
    INPUT_FIELD.value = currentNum;
    if (sNum === '') {
      fNum = currentNum;
    } else {
      sNum = currentNum;
    }
  }
}

function initKeys() {
  CALC_DATA.numbers.forEach((number) => {
    let node = document.createElement('button');
    node.classList.add('number');
    NUMBERS_FIELD.appendChild(node);
    node.innerText = number;
    node.addEventListener('click', (e) => handleClick(e));
  });
  CALC_DATA.hardOperators.forEach((operator) => {
    let node = document.createElement('button');
    node.classList.add('operator');
    OPERATORS_FIELD.appendChild(node);
    node.innerText = operator;
    node.addEventListener('click', (e) => handleHard(e));
  });
  CALC_DATA.operators.forEach((operator) => {
    let node = document.createElement('button');
    node.classList.add('operator');
    OPERATORS_FIELD.appendChild(node);
    node.innerText = operator;
    operator !== 'C' ? node.addEventListener('click', (e) => handleClick(e)) : node.addEventListener('click', () => clearAll());
  });
}

initKeys();
