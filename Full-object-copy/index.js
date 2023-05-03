// Чистая функция - функция которая не совершает побочных эффектов (сайд эффектов)
// принимает параметры, работает только с ними не изменяет их и возвращает результат

let a = {
    name:'Max',
    age:12
}
let b = {...a};
console.log(a===b);
// false

const state = {
    name:'bla-bla-bla-bla',
    age:1,
    school:{
        address:'Minsk',
        director:{
            name:'Andrey'
        }
    }
}
const newState_1 = {...state};
console.log(newState_1.school===state.school);
// true

const newState_2 = {...state, school: {...state.school}};
console.log(newState_2===state);
// false

console.log(newState_2.school.director===state.school.director);
// true

const newState_3 = {
    ...state,
    school:{
        ...state.school,
        director: {
            ...state.school.director
        }
    }
}

console.log(newState_3.school.director===state.school.director);
// false


const arr= [1,2,3,4,5];
const newArr = [...arr];
console.log(arr===newArr);
// false

const arr_2 = [{name:'D'}, {name:'M'}];
const newArr_2 = [...arr_2];
console.log(arr_2[0]===newArr_2[0]);
// true
const newArr_3 = arr_2.map(el=>({...el}));
console.log(arr_2[0]===newArr_3[0]);
// false