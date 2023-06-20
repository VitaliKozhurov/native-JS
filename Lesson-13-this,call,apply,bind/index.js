// this, call, apply, bind

// 1. Global scope
// 2. functions (simple | arrow)
// 3. call, apply, bind
// 4. function constructors

// console.log(this)   // in browser -- window, in Node JS -- global

// const arrowFunc = () => console.log(this)   // т.к. в стрелочной функции нет своего this она будет брать его выше
// arrowFunc()                                 // in browser -- window, in Node JS -- global

// const a = {
//     f: () => console.log(this),
//     f2() {
//         console.log(this)
//     }
// }
// const f = () => {
//     console.log(this)
// }
//
// f();         // in browser -- window, in Node JS -- global
// a.f()        // in browser -- window, in Node JS -- global  !!!
// a.f2()       // it is object a


// function a(){
//     console.log(this)
// }
// a()  ;           // in browser -- window, in Node JS -- global

// const car = {
//     color:'red',
//     showColor(){
//         console.log(this.color);
//     },
//     showColor2:()=>{
//         console.log(this.color);
//     }
// }
// car.showColor()     // red
// car.showColor2()    // undefined, так как стрелочная функция, this будет равен window, а у window нет свойства color

// window.color = 'black'
// const car = {
//     color:'red',
//     showColor:()=>{
//         const a = () =>console.log(this.color);
//         a()
//     },
//     showColor2(){
//         const a = () =>console.log(this.color);
//         a()
//     },
// }
// car.showColor()         // black, this будет равен window, а у window свойство color === black
// car.showColor2()        // red, this будет равен объекту


// let car1 = {
//     maxSpeed:200,
//     showMaxSpeed(){
//         console.log(this.maxSpeed)
//     }
// }
//
// let car2 = {
//     maxSpeed: 300
// }
// car1.showMaxSpeed()              // 200
//
// car1.showMaxSpeed.call(car2)    // 300
// car1.showMaxSpeed.apply(car2)   // 300
//
// const newFunc = car1.showMaxSpeed.bind(car2)
// newFunc()                       // 300

// const scooter = {
//     maxSpeed:60
// }
//
// const car1 = {
//     maxSpeed:200,
//     showMaxSpeed(){
//         (
//             ()=>console.log(this.maxSpeed)
//         ).call(scooter)
//     },
//     showMaxSpeed2(){
//         (
//            function (){console.log(this.maxSpeed)}
//         ).call(scooter)
//     }
// }
// car1.showMaxSpeed()             // 200, так как стрелочная функция
// car1.showMaxSpeed2()            // 60, так как переопределили this для function declaration

// const scooter = {
//     maxSpeed:60
// }
// const bike = {
//     maxSpeed:180
// }
//
// const car1 = {
//     maxSpeed:200,
//     showMaxSpeed(){
//         console.log(this.maxSpeed)
//     }
// }
//
// car1.showMaxSpeed.bind(scooter).apply(bike)     // 60, так как контекст определяется только один раз !!!

// const car = {
//     color: 'red',
//     showColor() {
//         console.log(this.color)
//     }
// }
//
// setTimeout(car.showColor, 1000)              // undefined, в setTimeout мы передаем ссылку на функцию
                                                    // при вызове функции в setTimeout this будет window

// const car = {
//     brand:'ferrari',
//     color:'red',
//     showColor(){
//         return `Car color ${this.color}`
//     },
//     showBrand:()=>{
//         return`Car brand ${this.brand}`
//     }
// }
// console.log(car.showColor());           // red
// console.log(car.showBrand());           // undefined

// const car = {
//     color:'red',
//     firstShowColor(){
//         console.log('1', this.color)
//     },
//     secondShowColor:()=>{
//         console.log('2', this.color)
//     },
//     thirdShowColor(){
//         (
//             ()=>console.log('3', this.color)
//         )()
//     },
// }
//
// car.firstShowColor();           // 1 red
// car.secondShowColor();          // 2 undefined
// car.thirdShowColor();           // 3 red
//
// const car = {
//     color:'red'
// }
// function foo (){
//     console.log(this.color)
// }
// const bindedFoo = foo.bind(car)
// bindedFoo()                             // red

const car = {
    color:'red',
    showColor(){
        console.log(this.color)
    }
}

function CarConstructor1(color){
    this.color = color;
    this.showColor = function(){
        console.log(this.color)
    }
}

const car1 = CarConstructor1.bind(car);
const newCar = new car1('black');

newCar.showColor()                              // black, к функции-конструктор нельзя привязать контекст !!!