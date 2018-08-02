class Stack {
  constructor() {
    this.items = [];
    this.count = 0
  }
  /* implement:
    add => .push(elem)
    remove => .pop()
    peek()
    isEmpty()
    clear()
    size()

  */

  add(value) {
    this.count++;
    return this.items.push(value);
  };

  remove() {
    this.count--;
    return this.item.pop();
  };

  peek() {
    return this.items[this.count - 1];
  };

  isEmpty() {
    return this.count == 0;
  };

  clear() {
    this.items = [];
  };
  
  size() {
    return this.count;
  };

}

// Time: 12:30 mins