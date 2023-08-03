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

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    // swap two nodes
    let temp = this.values.pop();
    let removeNode = this.values[0];
    this.values[0] = temp;
    this.maxHeapify(0);
    return removeNode;
  }

  maxHeapify(i) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let largest = i;

    if (l < this.values.length && this.values[l].priority > this.values[largest].priority) {
      largest = l;
    }

    if (r < this.values.length && this.values[r].priority > this.values[largest].priority) {
      largest = r;
    }

    if (largest !== i) {
      // swap
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new priorityQueue();
pq.enqueue("todo 1", 5);
pq.enqueue("todo 2", 99);
pq.enqueue("todo 3", 2);
pq.enqueue("todo 4", -39);
pq.enqueue("todo 5", 4);
pq.enqueue("todo 6", 67);

while (pq.values.length > 0) {
  console.log(pq.dequeue().value)
}
console.log(pq);