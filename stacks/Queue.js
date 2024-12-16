class Queue {
  items = [];

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.size()); // 1
