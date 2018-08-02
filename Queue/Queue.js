class Queue {
  constructor() {
    this.count = 0;
    this.items = []
  }

  enqueue(val) {
    this.count++;
    this.items.push(val);
  };

  dequeue() {
    this.count--;
    return this.items.shift();
  };

  peek() {
    if (this.count == 0) {
      return undefined;
    }
    return this.items[0];
  };

  isEmpty() {
    return this.count == 0;
  };

  clear() {
    this.items = [];
    this.count = 0;
  };

  size() {
    return this.count;
  }
}