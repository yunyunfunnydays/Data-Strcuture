class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.head === null) {
      console.log("Nothing in this linked list.")
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null
      this.length--;
      return temp
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.value;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  printAll() {
    if (this.head === null) {
      console.log("Nothing in this linked list.")
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

let myStack = new Stack();
myStack.push("Mike");
myStack.push("Harry");
myStack.push("James");
myStack.push("Kevin");
myStack.pop();
myStack.printAll();
