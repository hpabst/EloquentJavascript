class Group{
    constructor(){
        this.contents = [];
    }

    add(x){
        if(!this.contents.includes(x)) {
            this.contents.push(x);
        }
    }

    delete(x){
        if(this.contents.includes(x)){
            this.contents.splice(this.contents.indexOf(x), 1);
        }
    }

    has(x){
        return this.contents.includes(x);
    }

    static from(iterable){
        let newGroup = new Group();
        for(let item of iterable){
            newGroup.add(item);
        }
        return newGroup;
    }
}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.current = 0;
    }

    next(){
        if (this.current >= this.group.contents.length){
            return {done: true};
        }

        let value = this.group.contents[this.current];
        this.current += 1;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}