import Node from '../Node';

const print = (value) => {
  console.log(value);
}

class BST {
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
  };

  minNode(root) {
    let current = root;
    while (current && current.left) {
      current = current.left;
    }

    return current;
  };

  max(root = this.root) {
    return this.maxNode(root);
  };

  maxNode(root) {
    let current = root;
    while (current && current.right) {
      current = current.right;
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

// end of class
};

export default BST;