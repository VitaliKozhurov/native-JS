/* let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Create new promise");
        res("Hello");
    }, 1500);
});
myPromise.then((res) => console.log(res));
 */

/* let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        console.log(Math.random());
        res(Math.random());
    }, 1500);
});

myPromise.then((res) => console.log("Promise зарезолвился с ", res));
myPromise.then((res) => console.log("Promise зарезолвился с ", res));
console.log("finish"); */

/* const doAfter = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time * 1000);
    });
}; */

//doAfter(3).then((res) => console.log(`Сработал через ${res} сек.`));
//doAfter(5).then((res) => console.log(`Сработал через ${res} сек.`));

/* let pr3 = doAfter(3);
pr3.then(() => console.log("я сработал через 3 секунд"));
pr3.then(() => console.log("я сработал через 3 секунд")); */

/* let pr1 = doAfter(3);
let pr2 = pr1.then(() => console.log("Мой промис зарезолвился"));
let something = pr2.then(() =>
    console.log("Мой промис зарезолвился следом за pr1")
);

console.log(something); */
/* 
let pr = new Promise((resolve) => {
    let data = {
        cities: [{ title: "Minsk" }, { title: "Kiev" }],
        website: "it-kamasutra.com",
    };
    resolve(data);
});

pr.then((data) => {
    console.log(data);
    return data.website;
}).then((website) => {
    console.log(website);
}); */

/* const getRandomAfter = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Math.random());
        }, time * 1000);
    });
};

Promise.all([getRandomAfter(3), getRandomAfter(5), getRandomAfter(7)]).then(
    (data) => console.log(data)
); */
