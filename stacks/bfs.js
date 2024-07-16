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

class TreeNode {}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

//console.log(root);

const bfs = (n) => {
  const queue = new Queue();
  queue.enqueue(n);
  console.log(queue);
};

console.log(bfs(root));
