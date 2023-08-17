function construct_lps(input) {
  let lps = [];
  let j = 0;
  let i = 1;
  lps.push(0);
  while (i < input.length) {
    if (input[i] === input[j]) {
      j++;
      lps[i] = j;
      i++;
    } else {
      if (j > 0) {
        j = lps[j - 1];
      } else {
        j = 0;
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

console.log(construct_lps("AADAACAADAAD")); 