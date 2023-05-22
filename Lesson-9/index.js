// замыкание, лексическое окружение, рекурсия

// При запуске скрипта создается global LE, оно == {}
// Лексическое окружение === область видимости
//const car = 'bmw';   // добавляется в глобальное лексическое окружение

//startEngine(); // Start bmw
//startEngine_2(); // Error  Cannot access 'startEngine_2' before initialization

//function startEngine(){   // Всплывает и попадает в глобальное лексическое окружение при выполнении скрипта
//  startEngine lexical Env {} создается на каждый вызов функции
//    console.log(`Start ${car}`)
//}  //  при выполнении скрипта он будет искать переменную car сначала в startEngineLE, так как еёё там нет дальше будет поиск в global LE

/*const startEngine_2 = function (){
    console.log(`Start ${car}`)
}*/

//startEngine(); // Start bmw

//startEngine_2(); // Start bmw


/*function startEngine_3(){
    const car = 'audi';
    console.log(`Start ${car}`)
}*/

//startEngine_3();  // Start audi

/*const car = 'bmw';

var startEngine = function (){
    // [envirenment] --> globalLE
    const car= 'audi';
    return ()=>{
        // [envrinment] --> startEngineLE
        // foo{}
        console.log(`Start ${car}`);
    }
}

const foo = startEngine();
foo() // Start audi -- берется из замыкания*/

// Способность функции запомнить свое внешнее лексическое окружение !!!!!

/*const counter = () => {     // globalLE {counter:Function} --> null
    // [[envronment]] --> globalLE
    // counterLE {}
    let i = 0;      // counterLE {i:0}
    return () => {
        // [[envronment]] --> counterLE
        // countLE {} -- создается на момент вызова функции
        console.log(++i)
    }
}*/

//const count = counter();
//count();    // counterLE {i:1} 1
//count();    // counterLE {i:2} 2
//count();    // counterLE {i:3} 3

//const count1 = counter(); // Создается свой LE
//const count2 = counter(); // Создается свой LE

//count1();   // 1    i берется из LE count1
//count1();   // 2
//count1();   // 3

//count2();   // 1    i берется из LE count2
//count2();   // 2
//count2();   // 3


// Рекурсия

//const a = ()=>{}
//const b = ()=>{}
//const c = ()=>{}

//a();    // помещается в стек, вызывается и сразу очищается
//b();    // помещается в стек, вызывается и сразу очищается
//c();    // помещается в стек, вызывается и сразу очищается

/*const a1 = ()=>{
    const b1 = ()=>{
        const c1 = ()=>{}
        c1()
    }
    b1()
}*/
//a1()

// В стек добавляются a1 --> b1 --> c1
// Из стека удаляются c1 --> b1 --> a1


/*
const pow = (x,n)=>{
    if(n===1){
        return x
    } else {
        return x * pow(x, n-1)
    }
}

console.log(pow(2,3))   // 8*/