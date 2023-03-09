function maxSum(arr,size) {
    let max_value = -Infinity;

    if (size > arr.length) {
        return null;
    }

    for (let i = 0; i <= arr.length - size; i++) {
        let attemp = 0;
        for (let j = i; j < i + size; j++) {
            attemp += arr[j];
        }
        if (attemp > max_value) {
            max_value = attemp;
        }
    }
    return max_value;
}

function minSum(arr,size) {
    let min_value = Infinity;

    if (size > arr.length) {
        return null;
    }

    for (let i = 0; i <= arr.length - size; i++) {
        let attemp = 0;
        for (let j = i; j < i + size; j++) {
            attemp += arr[j];
        }
        if (attemp < min_value) {
            min_value = attemp;
        }
    }
    return min_value;
}

console.log(maxSum([1,2,3,4,5,9,-1,2],3));
console.log(minSum([1,2,3,4,5,9,-1,2],3));