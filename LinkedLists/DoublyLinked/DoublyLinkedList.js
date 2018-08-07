import Node from '../Node';
import SinglyLinkedList from '../SinglyLinked/LinkedList';

class DoublyNode extends Node {
  constructor(value, next, prev) {
    super(value, next);
    this.prev = prev;
  }
};

class DoublyLinkedList extends SinglyLinkedList {
  constructor() {
    this.tail = null;
  }

  
}