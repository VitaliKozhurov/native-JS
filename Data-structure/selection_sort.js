const array = [0, 3, 9, 4, 90, 21, 5, 8, -3, 8, 0, -7, 23, 11];

let count = 0;
const selection_sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count++;
        }
        let tmp = array[i];
        array[i]= array[indexMin];
        array[indexMin]=tmp;
    }
    return array
}

console.log(selection_sort(array))