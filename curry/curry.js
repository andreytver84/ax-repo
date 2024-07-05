const sum = (a, b, c) => a + b + c;
const mul = (a, b, c) => a * b * c;

const curry = (fn) => {
  const curred = (...args) => {
    if (args.length >= fn.length) {
      console.log("накопили аргументы: ", ...args);
      console.log("Решение: ", fn(...args));
      return;
      //return fn(...args);
    }
    console.log("недостаточно аргументов: ", ...args);
    return curred.bind(this, ...args);
  };
  return curred;
};

const curredSum = curry(sum);
const curredMul = curry(mul);

curredSum(2);
curredSum(2, 3);
curredSum(2, 3, 3);
