const array = [1,5,2,9,3,7,4,1,0,45,2,8,6,909,34,];
let count = 0;
const bubbleSort = (array)=>{
    for (let i = 0; i < array.length - 1; i++) {
        let isSort = true;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                isSort=false;
                [array[j], array[j+1]]=[array[j+1], array[j]]
            }
        }
        if(isSort) break
    }
    return array
}

console.log(bubbleSort(array))