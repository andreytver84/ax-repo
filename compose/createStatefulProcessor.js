const createStatefulProcessor = (startState, fn) => {
  let state = startState;

  return (value) => (state = fn(state, value));
};

// Пример функции обработки: суммирование состояния и нового значения
const statefulSum = createStatefulProcessor(0, (state, value) => state + value);

// Пример использования
console.log(statefulSum(5)); // 5
console.log(statefulSum(3)); // 8
console.log(statefulSum(10)); // 18

// Пример с другим процессором: хранение максимального значения
const statefulMax = createStatefulProcessor(Number.MIN_VALUE, (state, value) =>
  Math.max(state, value)
);
console.log(statefulMax(5)); // 5
console.log(statefulMax(3)); // 5
console.log(statefulMax(10)); // 10
