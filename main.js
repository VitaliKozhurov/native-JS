// Примитивы:
// string, number, boolean, null, undefined, BigInt, Symbol
// Объекты:
// object(array, function)

// Отличия объектов от примитивов
//Объекты:
//1. Более сложная структура
//2. Имеют свойства и методы
//3. Ссылочный тип данных
//let a = null;
//console.log(typeof a);  // object

//const b = {};
//console.log(typeof b);  // object

//const c = ()=>{};
//console.log(typeof c);  // function

//const arr = [];
//console.log(typeof arr);  //object
//console.log(Array.isArray(arr));  //true

// Для принятия решения о перерисовке данных, необходимо сравнить данные, которые
// приходят с сервера с текущими данными (если отличаются перерисовываем)

//  React --

//const myArr = [1,2,3,4]; // ссылка на ячейку памяти, в которой лежит объект
//myArr.push(5); // мутация массива

//const newArr = [1,2,3,4] // переносим содержимое исходного массива или копируем
//newArr.push(5);

// const newArr=myArr; // неправильное копирование, так как будет ссылка
// newArr.push(5);        на один объект

/*function logger(prev, current){
    if(prev!==current){
        console.log(current);
    }
}*/

//logger(myArr,newArr)

// Копирование объектов
const students = [
    {name:'Bob', age:34},
    {name:'Alex', age:32},
]

// CRUD create, read, update, delete
//add student ('Create')
const newSt = {
    name:'John',
    age:35
}
const copySt = [...students, newSt];

//update Bob name to Julia
const copy2St = copySt.map(stObj=>stObj.name==='Bob'?{...stObj, name:'Julia'}:stObj);

//delete Julia

const copy3St = copy2St.filter(stObj=>stObj.name!=='Julia');

console.log(copy2St)
console.log(copy3St)