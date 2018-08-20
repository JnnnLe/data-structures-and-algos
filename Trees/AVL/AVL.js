/*
TODO: Implement check height after insert and balance tree */


class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
};

const print = (value) => {
  console.log(value);
}

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

  // helper fn for inserting new Node into tree (above)
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

  preOrder(root, callback) {
    if (root) {
      callback(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  };

  inOrder(root, callback) {
    if (root) {
      this.inorder(root.left, callback);
      callback(root.value);
      this.inorder(root.right, callback);
    }
  };

  postOrder(root, callback){
    if (root) {
      this.postOrder(root.left, callback);
      this.postOrder(root.right, callback);
      callback(root.value);
    }
  };

  // search: min value, max value and specific value
  min(root = this.root) {
    return this.minNode(root);
  }

  minNode(root) {
    let current = root;
    while (current && current.left) {
      current = current.left;
    }
    
    return current;
  };

  search(key) {
    return this.searchNode(this.root, key);
  };

  searchNode(node, key) {
    if (!node) return false;

    if (node.value == key) return true;

    if (node.value > key && node.left) {
      return this.searchNode(node.left, key);
    } 
    else if (node.value < key && node.right) {
      return this.searchNode(node.right, key);
    } 
    return false;
  };

  delete(node) {
    return this.deleteNode(this.root, node);
  };

  deleteNode(node, key) {
    if (!node) {
      return null;
    }

    if (key < node.value) {
      node.left = this.deleteNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.deleteNode(node.right, key);
      return node;
    } else {
      // case: leaf node 
      if (node.left == null && node.right == null) {
        return node = null;
      }
      // case 2: one child
      if (node.left == null) {
        return node = node.right;
      } else if (node.right == null) {
        return node = node.left;
      }

      // case 3: node had a left and right value
      const minSuccessor = this.minNode(node.right);
      node.value = minSuccessor;
      node.right = this.deleteNode(node.right, minSuccessor);
      return node;
    }
  };


  //end
};

// current code from book:
class AVL extends bst {
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

  // double rotation: right then left rotation
  lrRotation(node) {
    node.left = this.rrRotation(node.left);
    return this.llRotation(node)
  };

  rlRotation(node) {
    node.right = this.llRotation(node.right);
    return this.rrRotation(node);
  };

// end of class
};







// import BST from './BST';

// class Node {
//     consdtructor(data) {
//       this.value = data;
//       this.left = null; 
//       this.right = null;

//       // difference from Node class in BST: parent property
//         // reference to parent - the relationship goes in both direction
//         // makes it possible to balance and get height of tree
//       this.parent = null;
//     }
// }

// class AVL {
//   constructor() {
//     super();
//     this.root = null;
//     this.size = 0;
//   }

//   add(parent = this.root, node) {
    
//     const newNode = new Node(node);

//     if (!parent) {
//       this.root = newNode;
//       this.size++;
//     } else {
      
//       // case: where the newNode value is larger than size of root value
//       if (newNode.value >= parent.value) {
//         if (parent.right == null) {
//           parent.right = newNode;
//           newNode.parent = parent;
//           this.size++;
//         } else {
//           this.add(parent.right, newNode);
//         }
//       } else {
//         if (parent.left == null) {
//           parent.left = newNode;
//           newNode.parent = parent;
//           this.size++;
//         } else {
//           this.add(parent.left, newNode);
//         }
//       }

//       // before we can exit the fn, we must check for balance on newNode
//       this.balance(newNode);
//     }
//   }
   

// // end of class
// }


// /*
// const j = new AVL;
// j.add(100)
// j.add(40)
// j.add(101)
// j.add(70)
// j.add(99)
// j.add(150)
// j.add(35)

// */