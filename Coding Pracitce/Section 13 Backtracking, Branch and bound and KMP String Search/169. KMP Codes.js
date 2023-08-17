function KMP(str1, str2) {
  let lps = [];
  function construct_lps(input) {
    let i = 1;
    let j = 0;
    lps.push(0);
    while (i < input.length) {
      if (input[i] === input[j]) {
        j++;
        lps.push(j);
        i++;
      } else {
        if (j > 0) {
          j = lps[j - 1];
        } else {
          j = 0;
          lps.push(0);
          i++;
        }
      }
    }
  }

  construct_lps(str2);
  let i = 0;
  let j = 0;
  let counter = 0;
  while (i < str1.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
      if (j === str2.length) {
        counter++;
        j = lps[j - 1];
      }
    } else {
      if (j > 0) {
        j = lps[j - 1];
      } else {
        j = 0;
        i++;
      }
    }
  }
  console.log(counter);
}
KMP("ABCDABCEABCDABCE", "ABCE");