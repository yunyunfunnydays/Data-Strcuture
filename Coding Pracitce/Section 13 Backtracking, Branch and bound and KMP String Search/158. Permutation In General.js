function perm(arr, start) {
  if (start >= arr.length) {
    result.push([...arr]);
  } else {
    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      perm(arr, start + 1);
      swap(arr, start, i);
    }
  }
}

function swap(arr, n1, n2) {
  let temp = arr[n1];
  arr[n1] = arr[n2];
  arr[n2] = temp;
}

let result = [];

perm(["A", "B", "C", "D", "E"], 0);
console.log(result);