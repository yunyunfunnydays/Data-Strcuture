class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority)
    if (this.values.length === 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while (parentIndex >= 0 && this.values[newIndex].priority > this.values[parentIndex].priority) {
      // swap parent and child
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;
      // update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }
}

let pq = new priorityQueue();
pq.enqueue("todo 1",5);
pq.enqueue("todo 2",99);
pq.enqueue("todo 3",2);
pq.enqueue("todo 4", -39);

console.log(pq);