class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  shift() {
    if (this.head === null) {
      console.log("Nothing in this linked list.")
      return null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      this.unshift(value);
      return
    } else if (index === this.length) {
      this.push(value);
      return;
    }

    let currentNode = this.head;
    let newNode = new Node(value);
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  removeAt(index) {
    if (index >= this.length || index < 0) {
      return null;
    } else if (index === 0) {
      let result = this.shift();
      return result;
    } else if (index === this.length - 1) {
      let result = this.pop();
      return result;
    }

    let currentNode = this.head;
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }

    let temp = currentNode.next;
    currentNode.next = currentNode.next.next
    this.length--;
    return temp;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    } else if (index === 0) {
      return this.head.value;
    }
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;

    // if (index >= this.length || index < 0) {
    //   return null;
    // }
    // let currentNode = this.head;
    // for (let i = 0; i < index; i++) {
    //   currentNode = currentNode.next;
    // }
    // return currentNode.value;
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

let myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
myLinkedList.push("Kevin");
// myLinkedList.pop();
// myLinkedList.shift();
// myLinkedList.unshift("Nora");
myLinkedList.printAll();
console.log(myLinkedList.length);
console.log(myLinkedList.get(1));