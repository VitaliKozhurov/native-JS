const array = [1, 5, 2, 9, 3, 7, 4, 1, 0, 45, 2, 8, 6, 909, 34,];

const quickSort = (array) => {
    if (array.length <= 1) return array;
    let pivotIndex = Math.floor(array.length / 2);
    let pivotElem = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue;
        if (array[i] < pivotElem) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivotElem, ...quickSort(greater)]
}

console.log(quickSort(array))