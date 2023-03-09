// Max: O(n2)  Min: O(n)  Ave: O(n2)

function insertionSort1(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    console.log(arr);
    return arr;
}

// 此寫法比較符合 insert 這個邏輯
function insertionSort2(arr) {
    for (let j = 1; j <= arr.length - 1; j++) {       
        // 把 for 跟 if 的條件合起來寫
        let key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = key;
    }
    console.log(arr);
    return arr;
}


insertionSort2([1,4,5,3,6,9,8,7]);