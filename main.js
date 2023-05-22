const promise = new Promise((res) => {
    console.log(1);
    setTimeout(() => {
        console.log(4)
        res()
        console.log(5)
    }, 1)
})

console.log(2)

promise.then(() => { console.log(3) })

Promise.resolve().then(() => { console.log(6) })
setTimeout(() => {
    console.log(100)
}, 0)

