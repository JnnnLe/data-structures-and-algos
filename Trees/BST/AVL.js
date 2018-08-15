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

class AVL extends BST {
  constructor() {
    super();
    this.root = null;
    this.height = 0;
  }

  
   

// end of class
}