//=============================Прототипы==================================

//             ЧТОЗА.__proto__            ЧТОЗА.prototype


//=============================__proto__==================================
// Для чего нужны прототипы?
// Наследование через прототипы, можно наделить объект свойствами другого объекта

// Как наследовать свойства из одного объекта в другой?
/*const student = {
    name:'Vitalya',
    age:30
}*/
// const mentor = {
//     isMentor:true
// }

// mentor.__proto__ = student;
//
// console.log(mentor) // {isMentor:true}
// console.log(mentor.name) // Vitalya
// console.log(mentor.age) // 30

// Способ наследования
// const student = {
//     name: 'Vitalya',
//     age: 30
// }
// const mentor1 = Object.create(student); // первый параметр объект prototype
// console.log(mentor1)            // {}
// console.log(mentor1.__proto__)  // { name: 'Vitalya', age: 30 }
//
// const mentor2 = Object.create(student, {
//     isMentor: {
//         value: true,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
//
// console.log(mentor2)            // { isMentor: true }
// console.log(mentor2.__proto__)  // { name: 'Vitalya', age: 30 }
//
// // Проверка, на то, является ли свойство собственным (а не унаследованным)
// console.log(mentor2.hasOwnProperty('name'));        // false -- унаследованное
// console.log(mentor2.hasOwnProperty('isMentor'));    // true  -- собственное

// Чем может быть равен __proto__?
// объект либо null

// У кого есть __proto__?
// Есть у всех объектов

//=============================prototype==================================
// функции-конструкторы в JS встроенные какие знаете?
// const object = new Object();
// const array = new Array();
// const func = new Function();
// const date = new Date();
// const number = new Number();
// const string = new String();
//
// const obj1 = {} // new Object()
// const arr1 = [] // new Array()
// // prototype указывает на то, при помощи какой функции конструктор была создана сущность
// console.log(obj1.constructor)     // [Function: Object]
// console.log(arr1.constructor)     // [Function: Array]
//
// console.log(obj1.__proto__.__proto__)   // null
// console.log(arr1.__proto__.__proto__)   // Object


// У кого есть свойство prototype?
// У функций и классов

// Какая связь между __proto__ и prototype?
// prototype -- объект со свойствами и методами сущности
// __proto__ -- ссылка на объект prototype

// Посмотри с помощью чего созданы все типы данных


// Смотрим прототипы и их цепочку


//=============================Прототипы для функции-конструктора==================================
// Написать функцию конструктор


// Задание свойства в прототип для функции-конструктора
// function Car (brand){
//     this.brand = brand
// }
// Car.prototype.maxSpeed = 180;
// Car.prototype.rashod = 8.9;
// const bmw = new Car('BMW');
// console.log(bmw.maxSpeed)
// console.log(bmw.rashod)

// Задание метода в прототип для функции-конструктора
// function Car (brand){
//    this.brand = brand
// }
//
// Car.prototype.sayHi = function (){
//     return 'Hello incubator'
// }
//
// const bmw = new Car('BMW');
// console.log(bmw.sayHi());               // Hello incubator

/*Array.prototype.logThis = function(){
    console.log(this)
}
const arr = [1,2,3]
arr.logThis()*/

// Как работает this для прототипов?


//=============================Создание своих методов для примитивов================================
// Откуда у примитивов взялись методы?
// Расскажи на примере (1).toString()
//console.log((1).toString())

// Создай метод superSamurai для строки, который будет добавлять строку,
// переданную в качестве параметра в нашу функцию к нашей текущей строке


// Попробуй применить его к любой строке


// Создай свойство samuraiCount для чисел, которое должно равняться 100200


// Попробуй переопределить свойство length для строки и посмотри получилось ли


// Докажи что в JS все это объект


// =============== Задание по прототипам ========================================

/*
1. Создай функцию-конструктор Animal, внутри нее напиши console.log('Наш зверь')
2. С помощью функции-конструктора Animal создай экземпляр monkey
3. Посмотри что будет если создавать экземпляр без ключевого слова
4. Посмотри что будет если к monkey применить метод constructor
5. Посмотри что будет если взять instanceof monkey от Animal

6. Создай новые свойства для Animal: type, arial, isDangerous, energy
7. Создай экземпляр monkey и lion c этими свойствами и проверь вышло
8. Создай метод run внутри Animal, в котором будет проверяться свойство energy,
если energy больше нуля, то она будет уменьшаться на 20,
иначе выведи в консоль -> Пощади зверя!
9. Проверь экземпляры на наличие методов и их работу

10. Равны ли между собой методы для monkey и lion?
А теперь сравни метод map для любых двух массивов arr1.map === arr2.map и сделай вывод
11. Добавь метод run в prototype (и убери старый из Animal)
12. Попробуй вызвать данный метод для каждого из экземпляров
и посмотри в браузере что у нас за экземпляры
Поясни откуда у них взялся данный метод
13. Добавь с помощью prototype новое свойство hungry = 60% в Animal (вне его)
и такое же свойство внутри Animal hungry = 10%
и попробуй вывести данное свойство в консоль, сначала когда они оба есть и когда есть свойство
только вне функции (с помощью prototype)
Объясни как это работает?
14. Создай еще один метод в prototype -> getEnergyInfo и выведи в консоль текущий уровень энергии -> '(число)'
Создай ниже такой же метод в prototype ->
getEnergyInfo и выведи в консоль -> 'Текущий уровень энергии (число)'
Посмотри что будет

Объясни как это работает и что это дает?
 */


// =============== Решение задачи по прототипам ========================================


//=============================JSON==================================

// Расшифруй аббревиатуру


// Для чего нужен JSON?


// Что попадает в JSON, а что нет?
/*
JSON поддерживает следующие типы данных:
- Объекты { ... }
- Массивы [ ... ]
- null

- Примитивы:
   * cтроки,
   * числа,
   * логические значения true/false,
 */

/*
JSON пропускает некоторые специфические свойства объектов JavaScript:
- Свойства-функции (методы).
- Символьные ключи и значения.
- Свойства, содержащие undefined.
 */


// Пример
const frontData = {
    name: 'Alex',
    login: 'alexandro',
    age: 25,
    isOnline: false,
    isAdmin: false,
    email: 'alex25@gmail.com',
    password: '12345',
    location: {
        country: 'Belarus',
        city: 'Vitebsk'
    }
}

// как из данного объекта сделать JSON?
const jsonData = JSON.stringify(frontData)

// В чем отличие данных в JSON от обычного объекта?


// console.log(frontData)
// console.log(jsonFrontData)


// Как теперь серверу превратить этот JSON обратно в объект?


// console.log(jsonBackData)


//=============================try, catch, finally==================================

// Для чего нужна данная конструкция и когда используется?


// Базовая запись
try {

} catch (error) {

} finally {

}

// Как обработать ошибку?
const a = 1;
try{
    const b = a + c;
}catch (e) {
    console.log(e)
}

console.log('123')

// Что делает блок try?


// Что делает блок catch?


// Какие свойства содержит объект ошибки и что они означают?


// Как можно сократить здесь код?


// Что делает блок finally?


// Как создать пользовательскую ошибку?