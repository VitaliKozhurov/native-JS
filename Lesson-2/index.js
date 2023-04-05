const students = [
    {
        name:'Bob',
        age:22,
        isMarried:true,
        scores:85,
    },
    {
        name:'Aex',
        age:21,
        isMarried:true,
        scores:89,
    },
    {
        name:'Nick',
        age:20,
        isMarried:false,
        scores:120,
    },
    {
        name:'John',
        age:19,
        isMarried:false,
        scores:100,
    },
]


// function getStudentNames (array) {
//     const result =[];
//     const getNaim = item=>item.name;
//     for (let i = 0; i < array.length; i++) {
//         result[i]=getNaim(array[i]);
//     }
//     return result;
// }
//
// function getStudentScores (array) {
//     const result =[];
//     const getScores = item=>item.scores;
//     for (let i = 0; i < array.length; i++) {
//         result[i]=getScores(array[i]);
//     }
//     return result;
// }


const getNaim = item=>item.name;
const getScores = item=>item.scores;
const addProp = item=>({...item, isStudent:true});

// Самодельный метод map
const getNewArray = (array, func)=>{
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i]=func(array[i]);
    }
    return result;
}
// Вызов функции для возврата массива очков
// console.log(getNewArray(students, getScores));
// console.log(getNewArray(students, addProp));

// MyPush Method
const myPush = (arr, item) =>{
    arr[arr.length] = item;
    return arr.length;
}


// FILTER METHOD
const getFilterArray=(array, func)=>{
    const result=[];
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])) {
            //result.push(array[i])
            myPush(result, array[i])
        }
    }
    return result
}

// const getStudentsAdult=(st)=>st.age===20;
// console.log(getFilterArray(students,getStudentsAdult));


// Includes
const myIncludes = (array, func) =>{
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])) return true
    }
    return false
}
const nameIsInArray = (item)=>{
    return item.name==='Nick';
}
//console.log(myIncludes(students,nameIsInArray))

// MyUnShift (add elem to array)

const myUnShift = (array,item)=>{
    for (let i = array.length-1; i >=0; i--) {
        array[i+1]=array[i]
    }
    array[0] = item;
    //return array
    return array.length
}

//console.log(myUnShift([1,2,3,4,5], 0));

const myShift = (array)=>{
    const removedItem = array[0];
    for (let i = 0; i < array.length-1; i++) {
        array[i]=array[i+1];
    }
    array.length=array.length-1;
    return removedItem;
}

// console.log(myShift([1,2,3,4,5]))

const nums = [1,2,3,4,5];
// __proto__ - свойство массива (объект) в котором находятся методы массива
//console.log(nums.__proto__)

function getLength(){
    return this.length;
}
// Создали метод массива
Array.prototype.getLength = getLength;

console.log(nums.getLength())