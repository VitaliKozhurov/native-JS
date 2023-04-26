// Массив строк сортируется без дополнительных параметров
const names = ['Donald', 'Alex', 'Bob'];
console.log(names.sort());
/*[ 'Alex', 'Bob', 'Donald' ]*/

// Сортировка выполняется с учетом регистра символов и языка
const names_2 = ['Donald', 'alex', 'aLEX', 'игорь', 'Юрий'];
console.log(names_2.sort());
/*[ 'Donald', 'aLEX', 'alex', 'Юрий', 'игорь' ]*/

// Метод Sort работает мутабельно, он меняет исходный массив и возвращает ссылку на исходный массив
console.log(names_2.sort() === names_2); // возвращает true

const nums = [1000, 333, 9, 77, -3]; // В таком случае сортировка выполняется по юникоду первого символа
console.log(nums.sort())
/*[ -3, 1000, 333, 77, 9 ]   */

// Необходимо в метод sort параметром передать функцию сравнения callback (она будет вызываться попарно для двух соседних элементов массива)
// По возрастанию
/*const compareFunc = (a, b) => {
    if (a > b) { // надо поменять элементы местами
        return 1
    } else {
        return -1
    }
}*/
const compareFuncH = (a, b) => a - b; // сортировка по возрастанию
const compareFuncL = (a, b) => b - a; // сортировка по убыванию

console.log(nums.sort(compareFuncH))
/*[ -3, 9, 77, 333, 1000 ]*/
console.log(nums.sort(compareFuncL))
/*[ 1000, 333, 77, 9, -3 ]*/

// Сортировка массива объектов
const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Helge',
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: 'alex',
        age: 22,
        isMarried: true,
        scores: 89
    },
];

// Сортировка по алфавиту обязательно через функцию сравнения
const copy_1 = [...students];
const sortByName = (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
console.log(copy_1.sort(sortByName));
/*[
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 },
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 }
] */
// Вариант сортировки с учетом локализации
const copy_2 = [...students];
console.log(copy_2.sort((a, b) => a.name.localeCompare(b.name)))

// Сортировка по возрасту (по численным значениям)
const copy_3 = [...students];
console.log(copy_3.sort((a, b) => a.age - b.age))
/*[
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Alex', age: 24, isMarried: true, scores: 89 },
  { name: 'Helge', age: 24, isMarried: true, scores: 90 }
] */


/*============== Сортировка пузырьком ==================*/

const nums_2 = [100, 333, 999, 77, -3];

const sortArr = (arr) => {
    for (let j = 0; j < arr.length - 1; j++) {
        let isSorted = true;

        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                /*let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;*/
                // Вариант переприсваивания значений массива
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

                isSorted = false;
            }
        }
        if (isSorted) break
    }
    return arr
}

console.log(sortArr(nums_2))