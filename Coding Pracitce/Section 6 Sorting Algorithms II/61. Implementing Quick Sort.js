let arr = [15, 3, 18, 17, -17, 3.1415,  20, 2, 1, 666, 18];
let pivotIndex = arr.length - 1;
function partition(p, r) {
  const pivot = arr[r];
  let i = p - 1; // record how many value is smaller than pivot
  for (let j = p; j < r; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = pivot;
  arr[r] = temp;
  return i + 1;
}

function quickSort(p, r) {
  if(p < r){
    const q = partition(p,r);
    quickSort(p, q - 1);
    quickSort(q + 1 ,r);
  }
}

quickSort(0, pivotIndex);
console.log(arr);
