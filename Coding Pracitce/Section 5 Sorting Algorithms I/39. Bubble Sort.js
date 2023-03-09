// Max: O(n2)  Min: O(n)  Ave: O(n2)
function bubbleSort(arr) {
    for (let i = 0; i <= arr.length - 2; i++) {
        let swapping = false;
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]){
                // swap
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp ;
                swapping = true;
            }
        }
        // when elements of array has already been sorted, and no element need to be swap.
        if (swapping == false) {
            break;
        }
    }
    console.log(arr);
}

let test = [];
for (let i = 0; i < 100; i++) {
    // Math.floor turn float to int (無條件捨去)
    test.push(Math.floor(Math.random() * 100))
}
bubbleSort(test);