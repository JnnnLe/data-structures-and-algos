import BST from './BST';

class Node {
    consdtructor(data) {
      this.value = data;
      this.left = null; 
      this.right = null;

      // difference from Node class in BST: parent property
        // reference to parent - the relationship goes in both direction
        // makes it possible to balance and get height of tree
      this.parent = null;
    }
}

class AVL {
  constructor() {
    super();
    this.root = null;
    this.size = 0;
  }

  add(parent = this.root, node) {
    
    const newNode = new Node(node);

    if (!parent) {
      this.root = newNode;
      this.size++;
    } else {
      
      // case: where the newNode value is larger than size of root value
      if (newNode.value >= parent.value) {
        if (parent.right == null) {
          parent.right = newNode;
          newNode.parent = parent;
          this.size++;
        } else {
          this.add(parent.right, newNode);
        }
      } else {
        if (parent.left == null) {
          parent.left = newNode;
          newNode.parent = parent;
          this.size++;
        } else {
          this.add(parent.left, newNode);
        }
      }

      // before we can exit the fn, we must check for balance on newNode
      this.balance(newNode);
    }
  }
   

// end of class
}


/*
const j = new AVL;
j.add(100)
j.add(40)
j.add(101)
j.add(70)
j.add(99)
j.add(150)
j.add(35)

*/