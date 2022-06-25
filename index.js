//1

function concatStrings(string = '', separator) {
  var prevString = string;
  const func = (nextStr = '') => {
    func.valueOf = prevString;
    if (typeof nextStr === 'string' && typeof prevString === 'string') {
      prevString += `${separator}${nextStr}`;
      func.valueOf = prevString;
      return func;
    } else {
      const fakeFunc = (nextStr) => {
        if (typeof prevString === 'string') {
          fakeFunc.valueOf = prevString;
          prevString = prevString;
          return fakeFunc;
        } else {
          prevString = '';
          return fakeFunc;
        }
      };
      fakeFunc.valueOf = prevString;
      return fakeFunc;
    }
  };

  return func;
}

// let a = concatStrings('vzasd',',')('asdfg')('avsa')('abcd')(123);
// console.log(a.valueOf);

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
