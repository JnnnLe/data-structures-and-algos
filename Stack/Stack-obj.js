class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  add(value) {
    this.items[this.count] = value;
    this.count++;
  };

  remove() {
    this.count--;
    return delete this.items[this.count];
  };

  peek() {
    if (this.count = 0) {
      return undefined;
    }
    return this.items[this.count - 1];
  };

  isEmpty() {
    return this.count == 0;
  };

  clear() {
    return this.items = {};
    this.count = 0;
  };

  size() {
    return this.count;
  };

  toString() {
    let objectToString = '';
    for (item in this.items) {
      objectToString += `${item}, `;
    }
    return objectToString;
  }

}