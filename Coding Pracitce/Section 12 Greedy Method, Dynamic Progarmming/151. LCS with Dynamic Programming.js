let table1;
let table2;
let x = "ATTTGGCTA";
let y = "TTAGCCAT";


function LCS(str1, str2) {
  table1 = [];
  table2 = [];
  let m = str1.length;
  let n = str2.length;

  for (let i = 0; i <= m; i++) {
    table1.push([]);
    table1[i][0] = 0;
    for (let j = 1; j <= n; j++) {
      table1[i].push(null);
    }
  }

  for (let j = 0; j <= n; j++) {
    table1[0][j] = 0;
  }

  for (let i = 0; i <= m; i++) {
    table2.push([]);
    for (let j = 0; j <= n; j++) {
      table2[i].push(null);
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table1[i][j] = table1[i - 1][j - 1] + 1;
        table2[i][j] = "↖";
      } else if (table1[i][j - 1] > table1[i - 1][j]) {
        table1[i][j] = table1[i][j - 1];
        table2[i][j] = "←";
      } else {
        table1[i][j] = table1[i - 1][j];
        table2[i][j] = "↑";
      }
    }
  }
}

LCS(x, y);
console.log(table1, table2);

function printLCS(i, j) {
  let result = '';
  while (table1[i][j] > 0) {
    if (table2[i][j] == "↖") {
      result = x[i - 1] + result;
      i--;
      j--;
    } else if (table2[i][j] == "↑") {
      i--;
    } else {
      j--;
    }
  }
  return result;
}
console.log(printLCS(x.length, y.length));