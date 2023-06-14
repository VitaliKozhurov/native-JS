// EventLoop
// 1.
/*function a() {
    b()
    console.log('a')
}
function b() {
    c()
    console.log('b')
}
function c() {
    console.log('c')
}

a();*/ // c, b, a

//2.
/*function a() {
    console.log('a')
}
function b() {
    console.log('b')
}
function c() {
    console.log('c')
}
a()
setTimeout(function timer(){
    console.log('timeout')
},2000)

b()
c() */    // a, b, c, timeout

// 3.
/*function a() {
    console.log('a')
}
function b() {
    console.log('b')
}
function c() {
    console.log('c')
}
a()
new Promise((res,rej)=>{
    console.log('create promise');
    setTimeout(function timer(){
        res(console.log('timeout'))
    }, 3000)
})

b()
c() */        // a, create promise, b, c, timeout


// 4.
/*setTimeout(function timer(){
    console.log('timeout_1')
},1000)
setTimeout(function timer(){
    console.log('timeout_2')
},1000)
setTimeout(function timer(){
    console.log('timeout_3')
},1000)*/

// timeout_1, timeout_2, timeout_3

// 5.
/*console.log('start')
setTimeout(function timer(){
    console.log('timeout_1')
},5000)
setTimeout(function timer(){
    console.log('timeout_2')
},3000)
setTimeout(function timer(){
    console.log('timeout_3')
},1000)
setTimeout(function timer(){
    console.log('timeout_4')
},1000)
console.log('end')*/
// start, end, timeout_3, timeout_4, timeout_2, timeout_1

// 6.
/*setTimeout(function timer(){
    console.log(1)
})

new Promise((res,rej)=>{
    console.log('2');
    res();
}).then(()=>console.log(3))

console.log(4)*/

// 2, 4, 3, 1

// 7.
/*
setTimeout(function timer() {
    console.log('s1')
}, 0)
setTimeout(function timer() {
    console.log('s2')
}, 1000)
new Promise((res, rej) => {
    console.log('p1');
    res();
    console.log('p2');
}).then(() => console.log('p3'))
console.log('w1')

async function test1() {
    console.log('a1')
    await test2()
    console.log('a2')
}

async function test2() {
    console.log('a3')
}

test1()
console.log('w2');
*/

// p1, p2, w1, a1,  a3,w2,p3, a2, s1, s2

// 8.
/*const myPromise = (delay)=>{
    return new Promise((res,rej)=>{
        setTimeout(res,delay)
    })
}

setTimeout(()=>{
    console.log('in settimeout 1')
}, 1000)

myPromise(1000).then(()=>console.log('in promise 1'))

setTimeout(()=>{
    console.log('in setTimeout 2')
},100)

myPromise(2000).then(()=>console.log('in promise 2'))*/

//in setTimeout 2,in settimeout 1, in promise 1,  in promise 2

// 9.
/*console.log(1)
setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => console.log(3))
})
new Promise((res, rej) => {
    console.log(4);
    res(5)
}).then((data) => {
    console.log(data)
    Promise.resolve().then(() => console.log(6)).then(()=> {
        console.log(7)
        setTimeout(() => {
            console.log(8)
        }, 0)
    })
})
setTimeout(() => {
    console.log(9)
})
console.log(10)*/
// 1,4,10,5,6,7,2,3,9,8