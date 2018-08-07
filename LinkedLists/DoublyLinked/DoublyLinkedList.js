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
    //super();
    this.tail = null;
  }

  insert(val, index) {
    let node = new DoublyNode(val);
    let current = this.head;
    
    if (index >= 0 && index <= this.size) {
      // inserting to head
      if (index == 0) {

        // if head doesnt exist yet:
        if (!this.head) {
          //dont forget about tail node
          this.head = node;
          this.tail = node;
        } else {
          // think about this.head, current.next, this.tail
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      }

      // inserting to be last item
      else if (index == this.size) {
        current = this.tail;
        this.tail = node;
        current.next = node;
        node.prev = current;

      } else {
        // baseline for middle insertion
        let previous = this.getElementAt(index - 1);
        current = previous.next;

        // assignment forward and backwards pointers

        // forward:
        previous.next = node;
        node.next = current;

        // backwards:
        current.prev = node;
        node.prev = previous;
      }

      this.size++;
      return true;
    }

    return false;
  };

  remove(index) {
    let current = this.head;

    // set bounds
    if (index >= 0 && index <= this.size) {

      // first index
      if (index == 0 && this.count == 1) {
        this.head = null;
        this.next = null;
        this.tail = null;
      }

      // removing head and the size of LL is not 1
      if (index == 0) {
        this.head = current.next;
        this.tail = current.next;
      }
      
      else if (index == this.size - 1) {
        // removing tail
        current = this.tail.prev;
        this.tail = current;
        current.next = null;
        
      } else {
        // middle index
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        current.next = previous.next;
      }

      // decrement the size with each removal
      this.size--;
      return true;
    }

    return undefined;
  };



// end of class  
}