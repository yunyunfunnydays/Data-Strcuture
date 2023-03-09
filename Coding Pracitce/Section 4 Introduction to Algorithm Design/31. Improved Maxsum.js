// 僅減加頭尾的 subArray，減少算數的步驟

function maxSum(arr, size) {
    if (size > arr) {
        return null;
    }

    let maxValue = 0;
    for (let i = 0; i < size; i++) {
        maxValue += arr[i];
    }

    let tempValue = 0;
    for (let j = 0; j < arr.length - size; j++) {
        tempValue = maxValue - arr[j] + arr[j + size];
        if (tempValue > maxValue) {
            maxValue = tempValue;
        }
    }
    console.log(maxValue);
    return maxValue;
}
maxSum([1,2,3,4,5,9,-1,2],3);