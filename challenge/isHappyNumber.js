const sumOfSquareDigits = (num) => {
  const numToString = String(num);
  if (numToString.length <= 3) {
    let num1 = +numToString[0];
    let num2 = numToString[1] ? +numToString[1] : 0;
    let num3 = numToString[2] ? +numToString[2] : 0;
    return Math.pow(num1, 2) + Math.pow(num2, 2) + +Math.pow(num3, 2);
  } else {
    console.log("число должно быть ммаксимум трёхзначное");
  }
};

const isHappyNumber = (num) => {
  let result = sumOfSquareDigits(num);
  for (let i = 1; i <= 10; i++) {
    if (result !== 1) {
      console.log(`номер итерации ${i}, результат вычислений ${result}`);
      result = sumOfSquareDigits(result);
    } else if (result === 1) {
      console.log(
        `Число ${num} счастливое т.к результат вычислений равен: ${result}`
      );
      return;
    }
  }
  console.log(`Число ${num} обычное число`);
};

isHappyNumber(7);
isHappyNumber(15);
isHappyNumber(9);
isHappyNumber(11);
