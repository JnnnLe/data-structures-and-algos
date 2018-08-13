import SinglyLinkedList from '../SinglyLinked/LinkedList';

class CircularlyLinkedList extends SinglyLinkedList {
  constructor() {
    super();
  }

  insert(val, index) {
    let current = this.head;
    const node = new Node(val);

    if (index >= 0 && index <= this.size) {

      if (index == 0) {
        if (!this.head) {
          this.head == node;
          // linking last node back to head
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        let previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
    
    this.size++;
    }

  };

// end of class
}