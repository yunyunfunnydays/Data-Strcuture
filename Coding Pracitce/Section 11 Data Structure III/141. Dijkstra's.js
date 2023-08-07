class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.edges = [];
    this.distanceFromStartNode = Infinity;
    this.previous = null;
  }

  addEdges(edge) {
    this.edges.push(edge);
  }
}

class Edges {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class MinHeap {
  constructor() {
    this.value = []
  }

  enqueue(node) {
    if (this.value === 0) {
      this.value.push(node);
      return true;
    }

    this.value.push(node);
    let newIndex = this.value.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (parentIndex >= 0
      && this.value[parentIndex].distanceFromStartNode > this.value[newIndex].distanceFromStartNode) {
      // swap parent and child
      let temp = this.value[parentNode];
      this.value[parentIndex] = node;
      this.value[newIndex] = temp;
      // update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.value.length === 0) {
      return;
    }
    if (this.value.length === 1) {
      return this.value.pop();
    }

    let temp = this.value.pop();
    let removeNode = this.value[0];
    this.value[0] = temp;

    this.minHeapify(0);
    return removeNode;
  }

  minHeapify(i) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let smallest;
    if (l < this.value.length - 1 && this.value[l].distanceFromStartNode < this.value[i].distanceFromStartNode) {
      smallest = l;
    } else {
      smallest = i;
    }

    if (r < this.value.length - 1 && this.value[r].distanceFromStartNode < this.value[r].distanceFromStartNode) {
      smallest = r;
    }

    if (smallest !== i) {
      let temp = this.value[i];
      this.value[i] = this.value[smallest];
      this.value[smallest] = temp;
      this.minHeapify(smallest);
    }
  }
}

function Dijkstra(node) {
  let mH = new MinHeap();
  node.distanceFromStartNode = 0;
  node.forEach(node => {
    mH.enqueue(node);
  })
  let currentNode = mH.dequeue();

  currentNode.edges.forEach((edge) => {
    if (edge.node.visited === false && edge.node.distanceFromStartNode > currentNode.distanceFromStartNode + edge.weight) {

    }
  })


}