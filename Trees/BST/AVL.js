import BST from './BST';

class AVL extends BST {
  constructor() {
    super();
    this.root = null;
    this.height = 0
  }

  getNodeHeight (node) {
    if (node == null) return -1;
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  // Left-Left :single right rotation
  llRotation(node) {
    let temp = node.left;
    node.left = temp.left;
    temp.right = node;
    node.left = temp.right;
    return temp;
  };

  rrRotation(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  };

  
  

// end of class
}