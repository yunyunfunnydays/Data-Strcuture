function palindrome (str) {
    let left = 0;
    let right = str.length -1;
    while (left <= right ) {
        if (str[left] !== str[right] ) {
            console.log('false');
            return false;
        } else {
            left++;
            right--;
        }
    }
    console.log('true');
    return true;
}

palindrome('abcddcba');