// Lexical Environment
// Лексическое окружение -- объект (область видимости)
// Типы лексического окружения -- локальное и глобальное
// if, for, function создают лексическое окружение
// Global
// block
// function
// {a:5, outer:null} global LE, где outer это ссылка на внешнее лексическое окружение
// const a = 5;

// const car = 'bmw';

//const startEngine = () => {
//    console.log(`Start ${car}`)
//}

// startEngine(); // Start bmw


// let car = 'bmw';

//const startEngine = () => {
//    console.log(`Start ${car}`)
//}
// car = 'audi'
// startEngine(); // Start audi


// global LE {}

// let car = 'bmw';  {car:'bmw'}

// const startEngine = () =>{       {car:'bmw', startEngine: Function}
// [[Environment]] --> globalLE -- ссылка создается когда создается функция
//  startEngineLE {} -- создается в момент вызова функции
// const car = 'toyota'             startEngineLE {car:'toyota'}
// console.log(`Start ${car}`)
// }

// !!!!!!!!!! Лексическое окружение создается в момент вызова функции !!!!!!!!!!

// startEngine()                    {car:'bmw', startEngine: Function}


// Global LE

// Замыкание -- это способность функции запомнить внешнее лексическое окружение при создании функции

// const counter = () =>{// globalLE {counter:function}
//environment --> Global LE
// }

// const counter = () =>{
// let counter = 0;
// return ()=>{
// console.log(counter++)
//}
// }

// const count1 = counter();
//count1()  0
//count1()  1
//count1()  2