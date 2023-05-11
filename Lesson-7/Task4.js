//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (str) => {
    return str === '' ? null : str.split(' ').sort((a, b) => a.length - b.length)[0];
}

/*
console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи!'))*/
