import Node from '../Node';

class bst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root == null) {
      this.root = new Node(value);
    } else {
      this.insertNode(this.root, value);
    }
  };

  // helper fn for inserting new Node into tree
  insertNode(node, value) {
    // check for value against value of node
    if (node.value > value) {
      // if the node is not yet defined, leaf node
      if (node.left == null) {
        // create new Node and insert
        node.left = new Node(value);
      } else {
        // else recursively call down subtree
        this.insertNode(node.left, value);
      }
    
    } else {
      if (node.right == null) {
        node.right = new Node(value);
      } else {
        this.insertNode(node.right, value);
      }
    }
  };

// end of class
}