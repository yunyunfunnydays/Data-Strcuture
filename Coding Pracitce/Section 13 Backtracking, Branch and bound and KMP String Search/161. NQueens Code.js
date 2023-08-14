function NQueens(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i].push(null);
    }
  }

  let i = 0;
  let j = 0;
  let loop = true;
  while (loop) {
    arr[i][j] = "Q";

    let violation = false;



  }
}