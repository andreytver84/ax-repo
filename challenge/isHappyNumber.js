const sumOfSquareDigits = (num) => {
  const numToString = String(num);
  if (numToString.length === 2) {
    let num1 = +numToString[0];
    let num2 = +numToString[1];
    console.log(Math.pow(num1, 2) + Math.pow(num2, 2));
  } else {
    console.log("число должно быть двузначное");
  }
};

sumOfSquareDigits(32);
sumOfSquareDigits(1);
sumOfSquareDigits(123);
