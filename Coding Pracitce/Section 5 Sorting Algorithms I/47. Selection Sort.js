// Max: O(n2)  Min: O(n2)  Ave: O(n2)

let unsorted = [14, -4, 17, 6, 22, 1, -5];
function selectionSort(arr) {
    for (let i = 0; i <= arr.length - 2; i ++) {
        let minIndex = i;
        for(let j = i; j <= arr.length - 1; j++) {
            if (arr[j] < arr[minIndex] ) {
                minIndex = j;
            }
        }
        let temp =  arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
    return arr; 
}

selectionSort(unsorted);