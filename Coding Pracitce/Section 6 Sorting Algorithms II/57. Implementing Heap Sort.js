let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666, -7];

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  let largest;

  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r
  }
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(0);
  }
}

heapSort();
console.log(arr);