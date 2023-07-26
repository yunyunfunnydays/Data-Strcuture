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
    this.path = null; //紀錄 traversal 的結果 (pre、in、postOrder)
    this.queue = []; //紀錄 traversal 的結果 (bftt)
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

  preOrder(n) {
    if (n !== null) {
      this.path = this.path + " " + n.key;
      this.preOrder(n.left);
      this.preOrder(n.right);
    }
  }

  inOrder(n) {
    if (n !== null) {
      this.inOrder(n.left);
      this.path = this.path + " " + n.key;
      this.inOrder(n.right);
    }
  }

  postOrder(n) {
    if (n !== null) {
      this.postOrder(n.left);
      this.postOrder(n.right);
      this.path = this.path + " " + n.key;
    }
  }

  bftt(n) {
    if (n !== null) {
      this.queue.push(n);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        if (currentNode.left !== null) {
          this.queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          this.queue.push(currentNode.right);
        }
      }
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

bst.bftt(bst.root);
console.log(bst.queue);

bst.path = [];
bst.preOrder(bst.root);
console.log(bst.path);

bst.path = [];
bst.inOrder(bst.root);
console.log(bst.path);

bst.path = [];
bst.postOrder(bst.root);
console.log(bst.path);
// 無法看出全貌，所以要再用 BFTT,pre、in、postOrder
// BFTT：15,6,5,13,1,-7,3
// Pre：15,6,5,1,-7,3,13
// In：-7,1,3,5,6,13,15
// Post：-7,3,1,5,13,6,15