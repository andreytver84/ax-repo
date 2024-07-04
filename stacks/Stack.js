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

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(7);
stack.push(10);
console.log(stack.peek()); // 10
console.log(stack.pop()); // 10
console.log(stack.size()); // 3

export default Stack;
