const composeMultiple = (arrFn) => (x) => {
  return arrFn.reduce((acc, fn) => fn(acc), x);
};

// Пример использования
const increment = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const combinedFunction = composeMultiple([increment, double, square]);
console.log(combinedFunction(2)); // ((2 + 1) * 2) ^ 2 = 36
