class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n){
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed)
                    reject(failed);
                else
                    resolve(value);
            });

            setTimeout(() => {
                if (done)
                    return;
                else if (n < 3)
                    attempt(n+1);
                else
                    reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    })
}

function storage(nest, name){
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

new Promise( (_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2", value));