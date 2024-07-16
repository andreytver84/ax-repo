const composeMultiple = (arrFn) => (x) => {
  return arrFn.reduce((acc, fn) => fn(acc), x);
};

const processNumbers = (arr, ...fns) => {
  const combinedFunction = composeMultiple(fns);
  return combinedFunction(arr);
};

// Пример функции обработки: суммирование
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const isEven = (arr) => arr.filter((i) => i % 2 === 0);
const isOdd = (arr) => arr.filter((i) => i % 2 !== 0);
const double = (arr) => arr.map((i) => i * 2);
const square = (arr) => arr.map((i) => Math.pow(i, 2));

// Пример использования
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = processNumbers(numbers, isEven, double, sum);
console.log(result1); // 2 + 4 + 6 + 8 + 10 = 30

const result2 = processNumbers(numbers, isOdd, square, sum);
console.log(result2); // 1 + 9 + 25 + 49 + 81 = 165
