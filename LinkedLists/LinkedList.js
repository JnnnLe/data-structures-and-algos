import Node from './Node';

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

//end  
}