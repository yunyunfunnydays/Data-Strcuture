let perfect = 0;
NQueens(8);
console.log("Number of Perfect Solutions is " + perfect);

function NQueens(n) {
  // 建立棋盤
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

  // 當Q1因為要找可以排的位子而掉出棋盤外時才停止

  while (loop) {
    // 放置Q
    arr[i][j] = "Q";

    // 驗證Q的位子是否符合規則
    let violation = false;
    let k = 0;

    // 1. 同列上方有沒有其他Q
    while (k < i) {
      if (arr[k][j] === "Q") {
        violation = true;
      }
      k++;
    }

    // 2.同行左邊有沒有其他Q
    k = 0;
    while (k < j) {
      if (arr[i][k] === "Q") {
        violation = true;
      }
      k++;
    }

    //斜左上有無Q 
    k = 1;
    while (i - k >= 0 && j - k >= 0) {
      if (arr[i - k][j - k] === "Q") {
        violation = true;
      }
      k++;
    }

    //斜左下有無Q 
    k = 1
    while (i + k < n && j - k >= 0) {
      if (arr[i + k][j - k] === "Q") {
        violation = true;
      }
      k++;
    }

    if (!violation) {
      console.log("okay");
      console.log(arr);
      if (j === n - 1) {
        perfect++;
        console.log("Perfect");
        console.log(arr);
        arr[i][j] = null;
        i++
      } else {
        j++;
        i = 0;
      }
    }

    if (violation) {
      console.log("not okay");
      console.log(arr);
      arr[i][j] = null;
      i++
    }

    function backtrackingPreviousQ() {
      j--;
      for (let b = 0; b < n; b++) {
        if (arr[b][j] === "Q") {
          arr[b][j] = null;
          i = b + 1;
          break;
        }
      }
    }

    while (i >= n) {
      backtrackingPreviousQ();
      if (j < 0) {
        console.log("dead end");
        loop = false;
        return;
      }
    }
  }
}
