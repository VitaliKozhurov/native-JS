// Sort -- Меняет исходный массив и возвращает ссылку на исходный массив
const name1 = ['Donald', 'Joe', 'Barack'];
console.log(name1.sort())
// [ 'Barack', 'Donald', 'Joe' ]

const name2 = ['Donald', 'Joe', 'Barack', 'alex', 'Юра', 'игорь'];
console.log(name2.sort())
// [ 'Barack', 'Donald', 'Joe', 'alex', 'Юра', 'игорь' ]

const nums = [1000, 999, 2000, 4, -100]
console.log(nums.sort())
// [ -100, 1000, 2000, 4, 999 ] Происходит приведение к строке и сравниваются по таблице UniCode символов

// Необходимо параметром в метод sort передавать функцию сравнения
const compareFunction = (a, b) => {
    // >0 -надо переставить
    // <=0 - не надо менять местами
    if (a > b) {
        return 1    // переставляем
    } else {
        return -1   // ничего не делаем
    }
}

console.log(nums.sort(compareFunction))
// [ -100, 4, 999, 1000, 2000 ]
console.log(nums.sort((a, b) => a - b))

const students = [
    {name: 'alex', age: 22, isMarried: true, scores: 89},
    {name: 'Alex', age: 24, isMarried: true, scores: 89},
    {name: 'Bob', age: 22, isMarried: true, scores: 95},
    {name: 'Helge', age: 24, isMarried: true, scores: 90},
    {name: 'John', age: 19, isMarried: false, scores: 121},
    {name: 'Nick', age: 20, isMarried: false, scores: 120}
];

// Sort for age
console.log(students.sort((a, b) => a.age - b.age))
/*[
{ name: 'John', age: 19, isMarried: false, scores: 121 },
    { name: 'Nick', age: 20, isMarried: false, scores: 120 },
    { name: 'alex', age: 22, isMarried: true, scores: 89 },
    { name: 'Bob', age: 22, isMarried: true, scores: 95 },
    { name: 'Alex', age: 24, isMarried: true, scores: 89 },
    { name: 'Helge', age: 24, isMarried: true, scores: 90 }
]*/
// Регистрозависимая сортировка
const sortForName = (a, b) => {
    if (a.name > b.name) return 1
    return -1
}
console.log(students.sort(sortForName))

/*[
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'alex', age: 22, isMarried: true, scores: 89 }
]
*/

// Регистронезависимая сортировка
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
/*
* [
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
]
*/


// Bubble sort

const numbers = [23, 67, 12, 90, 34];

for (let i = 0; i < numbers.length - 1; i++) {
    let isSort = true;
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            /*let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;*/
            isSort=false;
            [numbers[j], numbers[j+1]]=[numbers[j+1], numbers[j]]
        }
    }
    if(isSort) break
}
console.log(numbers)

// Quick Sort

const values = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];

function QuickSort(List) {
    if (List.length <= 1) {
        return List;
    }
    const baseValue = List[List.length - 1];
    const leftList = [];
    const rightList = [];

    for (let i = 0; i < List.length - 1; i++) {
        if (List[i] < baseValue) {
            leftList.push(List[i]);
        }
        else {
            rightList.push(List[i])
        }
    }

    return [...QuickSort(leftList), baseValue, ...QuickSort(rightList)];
}

console.log(QuickSort(values));