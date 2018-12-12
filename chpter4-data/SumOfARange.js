function range(start, end){
    let arr = [];
    for(let i = start; i < end + 1; i++){
        arr.push(i);
    }
    return arr;
}

function sum(nums){
    let sum = 0;
    for(let n of nums){
        sum += n;
    }
    return sum;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));