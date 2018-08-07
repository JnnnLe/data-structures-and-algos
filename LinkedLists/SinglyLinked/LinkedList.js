import Node from '../Node';

/*
class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
};
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToTail(val) {
    const node = new Node(val);
    let current;

    // check to see if this is the first node in the LL
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next
      }

      // once you hit the tail node, 
      //assign current.next to be newly created Node
      current.next = node;
    }
    
    //increment the size after the node is added;
    this.size++;
    return node;
  };

  // Removing elements from a LL
  // Remove elements at
  removeAt(index) {
    let current = this.head;

    if (index == 0) {
      this.head = current.next;
    } 
    
    if (index >= 0 && index <= this.size) {
      let previous;
      for (let i = 0; i < index; i++) {
        /* 
        IMPORTANT: 
        obtain the value of current and set it to be previous and previous.next to be current 
        */
        previous = current;
        current = current.next;
      }

      // links previous with current's next: skip it to remove
      previous.next = current.next;
      
    }

    this.size--;
    return current.value;
  };

  getElementAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    let current = this.head;
    if (index >= 0 && this.size > index) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  };

  remove_at(index) {
    if (index == 0) {
      this.head = this.head.next;
    }

    if (index >= 0 && this.size >= index) {
      let prev = this.getElementAt(index - 1);
      let current = prev.next;
      prev.next = current.next;
      this.size--;

      return current.value;
    }

    return undefined;
  };

  insert(val, index) {
    const node = new Node(val);
    let current = this.head;

    if (index >= 0 && index <= this.size) {

      if (index == 0) {
        this.head = node;
        node.next = current;
        
      } else {
        
        let prev = this.getElementAt(index - 1);
        current = prev.next;
        node.next = current;
        prev.next = node;
      }
      
      this.size++;
      return true;
    }
      return false;
  };

  indexOf(element) {
    let current = this.head;
    let index = -1;

    for (let i = 0; i < this.size && current != null; i++) {
      if (current.value == element) {
        return index = i;
      } else {
      current = current.next;
      }  
    }      
      return index;
  };

  remove(element) {
    let indexOfElement = this.indexOf(element);

    if (indexOfElement != -1) {
      return this.removeAt(indexOfElement);
    }
    return undefined;
  };

  toStr() {
    let results = '';

    let current = this.head;

    if (current) {
      for (let i = 0; i < this.size; i++) {
        results = results + `${current.value}, `;
        current = current.next;
      }
    }

    return results.slice(0, results.length - 2);
  };

//end  
}