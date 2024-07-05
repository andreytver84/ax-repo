const isHappyTicket = (num) => {
  if (num.length % 2 !== 0) {
    console.log("Длина номера билета должна быть чётной");
    return;
  }

  const halfNum = num.length / 2;

  const firstHalfNumArr = [...num.slice(0, halfNum)];
  const secondHalfNumArr = [...num.slice(halfNum)];

  const firstHalfNumSum = firstHalfNumArr.reduce(
    (sum, i) => (sum = sum + Number(i)),
    0
  );

  const secondHalfNumSum = secondHalfNumArr.reduce(
    (sum, i) => (sum = sum + Number(i)),
    0
  );

  return console.log(firstHalfNumSum === secondHalfNumSum);
};

isHappyTicket("385916"); // true
isHappyTicket("231002"); // false
isHappyTicket("1222"); // false
isHappyTicket("054702"); // true
isHappyTicket("00"); // true
