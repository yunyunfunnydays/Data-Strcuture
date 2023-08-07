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

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class MinHeap {
  constructor() {
    this.values = []
  }

  enqueue(node) {
    if (this.values === 0) {
      this.values.push(node);
      return true;
    }

    this.values.push(node);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (parentIndex >= 0
      && this.values[parentIndex].distanceFromStartNode > this.values[newIndex].distanceFromStartNode) {
      // swap parent and child
      let temp = this.values[parentNode];
      this.values[parentIndex] = node;
      this.values[newIndex] = temp;
      // update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }

    let temp = this.values.pop();
    let removeNode = this.values[0];
    this.values[0] = temp;

    this.minHeapify(0);
    return removeNode;
  }

  minHeapify(i) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let smallest;
    if (l < this.values.length - 1 && this.values[l].distanceFromStartNode < this.values[i].distanceFromStartNode) {
      smallest = l;
    } else {
      smallest = i;
    }

    if (r < this.values.length - 1 && this.values[r].distanceFromStartNode < this.values[r].distanceFromStartNode) {
      smallest = r;
    }

    if (smallest !== i) {
      let temp = this.values[i];
      this.values[i] = this.values[smallest];
      this.values[smallest] = temp;
      this.minHeapify(smallest);
    }
  }

  decrease_priority(node) {
    let newIndex = this.values.indexOf(node);
    let parentIndex = Math.floor((newIndex - 1) / 2);

    while (parentIndex >= 0 && this.values[parentIndex].distanceFromStartNode > this.values[newIndex].distanceFromStartNode) {
      // swap node and its parent node
      let temp = this.values[parentIndex];
      this.values[parentIndex] = node;
      this.values[newIndex] = temp;
      // update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }
}

function Dijkstra(nodes, startNode) {
  let MH = new MinHeap();
  startNode.distanceFromStartNode = 0;

  nodes.forEach(node => {
    MH.enqueue(node);
  })

  let currentNode = MH.dequeue();
  startNode.visited = true;

  while (MH.values.length > 0) {
    // 1. min heap最小值的node => currentNode
    // 2. node鄰居中，沒有拜訪過的node => neighborNode
    // 3. neighborNode.distance > currentNode.distance + weight
    // 4. neighborNode.distance = currentNode.distance + weight
    // neighborNode.previous = currentNode, MH decrease neighborNode's priority

    currentNode.edges.forEach((edge) => {
      let neighborNode = edge.node;
      if (!neighborNode.visited) {
        let d1 = neighborNode.distanceFromStartNode;
        let d2 = currentNode.distanceFromStartNode;
        let d3 = edge.weight;
        if (d1 > d2 + d3) {
          neighborNode.distanceFromStartNode = d2 + d3;
          neighborNode.previous = currentNode;
          MH.decrease_priority(neighborNode);
        }
      }
    })
    currentNode = MH.dequeue();
    currentNode.visited = true
  }
}


let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");

A.addEdges(new Edge(B, 2));
A.addEdges(new Edge(C, 2));
B.addEdges(new Edge(A, 2));
B.addEdges(new Edge(D, 1));
B.addEdges(new Edge(E, 4));
C.addEdges(new Edge(A, 2));
C.addEdges(new Edge(D, 1));
C.addEdges(new Edge(F, 2));
D.addEdges(new Edge(B, 1));
D.addEdges(new Edge(C, 1));
D.addEdges(new Edge(E, 2));
D.addEdges(new Edge(F, 3));
E.addEdges(new Edge(B, 4));
E.addEdges(new Edge(D, 2));
E.addEdges(new Edge(F, 1));
F.addEdges(new Edge(C, 2));
F.addEdges(new Edge(D, 3));
F.addEdges(new Edge(E, 1));



Dijkstra([A, B, C, D, E, F], A);
console.log("A's information");
console.log(A.distanceFromStartNode);
console.log(A.previous);
console.log("B's Info");
console.log(B.distanceFromStartNode);
console.log(B.previous.value);
console.log("C's Info");
console.log(C.distanceFromStartNode);
console.log(C.previous.value);
console.log("D's Info");
console.log(D.distanceFromStartNode);
console.log(D.previous.value);
console.log("E's Info");
console.log(E.distanceFromStartNode);
console.log(E.previous.value);
console.log("F's Info");
console.log(F.distanceFromStartNode);
console.log(F.previous.value);