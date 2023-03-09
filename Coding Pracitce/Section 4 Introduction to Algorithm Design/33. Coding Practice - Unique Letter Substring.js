function uniqueLetterString(str) {
    let start = 0;
    let end = 0;
    let counter = {};
    let maxLength = -Infinity;

    while (end < str.length) {
        console.log(counter);
        if (counter[str[end]]) {
            counter[str[start]] = false;
            start++;
        } else {
            counter[str[end]] = true;
            end++;
            if(maxLength < end - start) {
                maxLength = end - start;
            }
        }
    }

    if (maxLength === -Infinity) {
        console.log("Cannot find unique letters subString");
        return null
    }
    console.log(maxLength);
    return maxLength;
}

uniqueLetterString("aaaaaaaaaaaa");
uniqueLetterString("thisIsHowWeDoIt");