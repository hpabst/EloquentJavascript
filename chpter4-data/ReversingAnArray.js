function reverseArray(arr){
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


console.log(reverseArray(["A", "B", "C"]));

console.log(reverseArrayInPlace(["a", "b", "c", "d"]));
console.log(reverseArrayInPlace(["a", "b", "c"]));