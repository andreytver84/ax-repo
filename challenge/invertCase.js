const invertCase = (str) => {
  const charArr = [...str];

  const inverCharArr = charArr.map(
    (char) =>
      (char =
        char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase())
  );

  console.log(...inverCharArr);
};

invertCase("Hello, World!"); // hELLO, wORLD!
invertCase("I loVe JS"); // i LOvE js
