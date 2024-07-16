//import Stack from "./Stack.js";

class Stack {
  items = [];

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }
}

function isBalanced(str) {
  const stack = new Stack();
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (bracketPairs[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return stack.size() === 0;
}

console.log(isBalanced("{[()()]}")); // true
console.log(isBalanced("{[(])}")); // false
