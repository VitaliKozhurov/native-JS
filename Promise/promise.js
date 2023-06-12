const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('promise_1 resolve')
    }, 1000)
});
//promise1.then(data => console.log(data))


const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Vitalik')
    }, 2000)
});
//promise2.then(data => console.log(data))


/*Promise.all([promise1, promise2])
    .then(data => console.log('finish'))
    .catch((err) => console.log(err))*/

/*
Promise.allSettled([promise1, promise2])
    .then(data => console.log(data))*/

promise2.then(data=>console.log(data))

const returnedPromise = promise2.then(data=>setTimeout(()=>console.log(data),1000));

console.log(returnedPromise)