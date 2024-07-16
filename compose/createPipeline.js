const createPipeline =
  (...fns) =>
  (x) => {
    return fns.reduce((acc, fn) => fn(acc), x);
  };

// Пример функций для использования в конвейере
const increment = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

// Пример использования: создание различных конвейеров
const pipeline1 = createPipeline(increment, double, square);
const pipeline2 = createPipeline(square, double, increment);

console.log(pipeline1(2)); // ((2 + 1) * 2) ^ 2 = 36
console.log(pipeline2(2)); // ((2 ^ 2) * 2) + 1 = 9

// Дополнительный пример: композиция обработки и изменения состояния

const createStatefulProcessor = (startState, fn) => {
  let state = startState;

  return (value) => (state = fn(state, value));
};

const statefulProcessor = createStatefulProcessor(
  0,
  (state, value) => state + value
);
const processorPipeline = createPipeline(
  (x) => statefulProcessor(x),
  (x) => x * 3,
  (x) => x + 2
);

console.log(processorPipeline(5));
