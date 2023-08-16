for  (let e of [1, 2, 3, 4, 5]) {
    console.log(e);
}

let o = {
    [Symbol.iterator] : () => ({ _value: 0, next(){
        if  (this._value == 10) {
            return {done: true}
        } else {
            return {this._value++, done: false}
        }
    }})
};

for (let e of o) {
    console.log(e);
}

function sleep(duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, duration);
    });
}

async function*  foo() {
    let i = 0;
    while(true) {
        await sleep(1000);
        yield i++;
    }
}

/**
 * 
 */
for  await (let e of foo()) {
    console.log(e);
}

