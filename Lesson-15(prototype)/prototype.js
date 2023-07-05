// proto -- есть у любого объекта и оно ссылается на prototype того класса при помощи которого был создан данный объект

// let a = new String('string');
// console.log(a.__proto__)                        // String.prototype
// console.log(a.__proto__ === String.prototype)   // true
//
// let b = 'bmw';
// console.log(b.__proto__===String.prototype)     // true

// let num = 12;
// console.log(num.__proto__ === Number.prototype)     // true

// let obj = {}
// console.log(obj.__proto__ === Object.prototype)       // true

// Любой класс или функция конструктор это объект, которые в свою очередь были созданы при помощи функции
// console.log(Object.__proto__ === Function.prototype)    // true

// Замкнутая ссылка
// console.log(Function.__proto__===Function.prototype)    // true

/*const arr = [];
console.log(arr.__proto__===Array.prototype)  */  // true
// console.log(Array.prototype)
//
// console.log(Array.prototype.__proto__===Object.prototype)       // true

// console.log(Object.prototype.__proto__ === null)    // true

// console.log({}.__proto__ === {}.__proto__)        // true

// const foo = () => {
// }
// const bar = () => {
// }
// console.log(foo.__proto__ === bar.__proto__)    // true
//
// console.log(foo.__proto__===Function.prototype)     // true
// console.log(bar.__proto__===Function.prototype)     // true

// console.log(foo.prototype)

// let num = 11;
// console.log(num.protype === Number.prototype)       // false
// console.log(num.__proto__===Number.prototype)       // true

// class User {}
//
// console.log(User.__proto__===Function.prototype)    // true
// console.log(User.__proto__.__proto__===Object.prototype)    // true