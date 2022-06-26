//1

function concatStrings(string, separator = '') {
  var prevString = string;
  var prevSep;
  typeof separator === 'string' ? (prevSep = separator) : (prevSep = '');
  const func = (nextStr, separator) => {
    if (typeof nextStr === 'string') {
      if (separator && typeof separator === 'string') {
        prevString += `${prevSep}${nextStr}`;
        prevSep = separator;
      } else {
        prevString += `${prevSep}${nextStr}`;
      }
      return func;
    } else {
      return prevString;
    }
  };
  return func;
}


//2

class Calculator {
  constructor(x, y) {
    if (!isNaN(x) && !isNaN(y) && isFinite(x) && isFinite(y)) {
      this.x = x;
      this.y = y;
    } else throw new Error('Передано невалидное значение!');
  }

  setX = (x) => {
    this.x = x;
  };
  setY(y) {
    this.y = y;
  }
  logSum = () => {
    console.log(this.x + this.y);
    return this.x + this.y;
  };
  logMul = () => {
    console.log(this.x * this.y);
    return this.x * this.y;
  };
  logSub = () => {
    console.log(this.x - this.y);
    return this.x - this.y;
  };
  logDiv = () => {
    if (this.y === 0) {
      throw new Error('На ноль нельзя делить');
    } else {
      console.log((this.x / this.y).toFixed(2));
      return (this.x / this.y).toFixed(2);
    }
  };
}

let calc = new Calculator(5, 3);
