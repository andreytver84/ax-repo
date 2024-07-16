const add = (x) => x + 1;
const subtract = (x) => x - 1;
const multiply = (x) => x * 2;
const divide = (x) => x / 2;

const compose = (f, g) => (x) => f(g(x));

const addThenMultiply = compose(multiply, add); // multiply(add(x))
const divideThenSubtract = compose(subtract, divide); // subtract(divide(x))

console.log(addThenMultiply(4)); // (4 + 1) * 2 = 10
console.log(divideThenSubtract(8)); // (8 / 2) - 1 = 3

// Дополнительные примеры
const multiplyThenAdd = compose(add, multiply); // add(multiply(x))
console.log(multiplyThenAdd(4)); // add(multiply(4)) = add(8) = 9

const subtractThenDivide = compose(divide, subtract); // divide(subtract(x))
console.log(subtractThenDivide(8)); // divide(subtract(8)) = divide(7) = 3.5
