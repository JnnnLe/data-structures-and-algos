
import Node from './Node';

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToTail(val) {
    const node = new Node(val);
    let currentNode;

    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      
      while (currentNode.next != null) {
        // while there is a next value, iterate doen the links
        currentNode = currentNode.next;
      } 

      currentNode.next = node;
    }

    this.size++;
  };

  getIndexAt(index) {
    // if the index is within the range of 0 - this.size
    if (index >=0 && index <= this.size ) {
      // start iteration at the beginning, where head node is the first node
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(val, index) {
    if (index <= this.size && index >= 0) {
      const node = new Node(val);

      // if inserting to the first index
      if (index == 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let previous = this.getIndexAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.size++;
      return true;
    }

    return false;
  };

//end  
}