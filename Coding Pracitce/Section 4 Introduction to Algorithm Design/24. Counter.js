//  use object to restore status
function intersection( arr1, arr2) {
    let result = [];
    let arr3 = arr1.concat(arr2);
    let counter = {};
    let 

    for (let i = 0; i < arr3.length; i++) {
        if (!counter[arr3[i]]) {
            counter[arr3[i]] = 1;
        } else {
            counter[arr3[i]]++;
        }
    } 
    for (const property in counter) {
        if (counter[property] >= 2) {
            result.push(property);
        }
    }
    return result;
}

intersection([1, 3, 5, 7, 8],[7, 8]);