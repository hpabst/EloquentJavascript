function arrayToList(arr){
    let list = {};
    let pointer = list;
    let last = pointer;
    for(let a of arr){
        pointer.value = a;
        pointer.rest = {};
        last = pointer;
        pointer = pointer.rest;
    }
    last.rest = null;
    return list;
}

function listToArray(list){
    let arr = [];
    let pointer = list;
    while(pointer !== null){
        arr.push(pointer.value);
        pointer = pointer.rest;
    }
    return arr;
}

function prepend(element, list){
    return {value: element, rest: list};
}

function nth(list, num){
    if (num === 0){
        return list.value;
    } else {
        return nth(list.rest, num-1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20