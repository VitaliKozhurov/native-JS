const array = [1,4,5,8,5,1,2,7,5,2,11];
// Количество итераций
let count = 0;
const linearSearch=(array, item)=>{
    for(let i=0; i<array.length;i++){
        count++;
        if(array[i]===item) return i;
    }
    return null
}

console.log(linearSearch(array, 5))
console.log('count = ', count)