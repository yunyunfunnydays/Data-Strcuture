class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  treeInsert(z) {
    let x = this.root;
    let y = null;
    while (x !== null) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    if (y === null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
  }
}

let bst = new BinarySearchTree();
bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

console.log(bst);
// 無法看出全貌，所以要再用 BFTT,pre、in、postOrder
// BFTT：15,6,5,13,1,-7,3
// Pre：15,6,5,1,-7,3,13
// In：-7,1,3,5,6,13,15
// Post：-7,3,1,5,13,6,15