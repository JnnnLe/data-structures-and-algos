class Deque {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // add to front of deque
  addFront(val) {
    this.size++;
    this.items.unshift(val);
    this.peekFront();
  };

  // add to back of deque
  addBack(val) {
    this.size++;
    this.items.push(val);
    this.peekBack();
  };

  removeFront() {
    this.size--;
    return this.items.shift();
  };

  removeBack() {
    this.size;
    return this.items.pop();
  };

  peekFront() {
    return this.items[0];
  };

  peekBack() {
    return this.items[this.size - 1];
  };

 }