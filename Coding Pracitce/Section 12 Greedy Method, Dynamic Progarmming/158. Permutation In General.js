function perm(arr, start) {
  if (start >= arr.length) {
    result.push([...arr]);
  } else {
    for (let i = 0; i < arr.length; i++) {
      swap(arr, start, i);
      perm(arr, start + 1);
      swap(arr, start, i);
    }
  }
}

function swap(arr, start, i) {
  let temp = arr[start];
  arr[start] = arr[i];
  arr[i] = temp;
}

let result = [];

perm(["A", "B", "C", "D", "E"], 0);
console.log(result);