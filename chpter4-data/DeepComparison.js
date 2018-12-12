function deepEqual(a, b){
    if(typeof a == "object" && a != null && typeof b == "object" && b != null){
        if(Object.keys(a).length === Object.keys(b).length){
            for(let k of Object.keys(a)){
                if (!deepEqual(a[k], b[k])){
                    return false;
                }
            }
        } else {
            return false;
        }
    } else {
        return a === b;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true