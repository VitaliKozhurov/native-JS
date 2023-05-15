//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => str&&typeof str ==='string' ?str.split(' ').map(subStr=>subStr[0].toUpperCase()+subStr.slice(1).toLowerCase()).join(' '):'';

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
console.log(setUpperCase(""))
console.log(setUpperCase(1))