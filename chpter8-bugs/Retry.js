class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a, b){
    if(Math.random() < 0.2){
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a,b){
    let result;
    while(true){
        try{
             result = primitiveMultiply(a, b);
             break;
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)){
                throw error;
            }
        }
    }
    return result;
}

console.log(reliableMultiply(8, 8));
// → 64