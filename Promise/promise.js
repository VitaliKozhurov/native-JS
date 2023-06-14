/*const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('promise_1 resolve')
    }, 1000)
});*/
//promise1.then(data => console.log(data))


/*const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Vitalik')
    }, 2000)
});*/
//promise2.then(data => console.log(data))


/*Promise.all([promise1, promise2])
    .then(data => console.log('finish'))
    .catch((err) => console.log(err))*/

/*
Promise.allSettled([promise1, promise2])
    .then(data => console.log(data))*/

/*
promise2.then(data=>console.log(data))

const returnedPromise = promise2.then(data=>setTimeout(()=>console.log(data),1000));

console.log(returnedPromise)*/

/*

console.log('Step 1');

const asyncFunc = async () =>{
    console.log('Step 2')
    const asyncPromise = await new Promise((res,rej)=>{
        setTimeout(()=>res('It is Async Await'),2000)
    })
    console.log('Step 3')
    return '123' +asyncPromise
}


asyncFunc().then(data=>console.log('async'))

console.log('Step 4')*/


/*const getNumber = () => {
    return Promise.resolve(Math.random())
}*/

const getNumber = () => {
    console.log('1')
    return new Promise((res, rej) => {
        console.log('2')
        setTimeout(()=>{
            console.log('3')
            res(Math.random())
        },3000)
        console.log('4')
    })
}
getNumber().then(number => console.log(number))