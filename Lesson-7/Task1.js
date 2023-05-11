//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает строку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString_1 = (str, n, split) => {
    return Array(n).fill(str).join(split);
}

const repeatString_2 = (str, n, split) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += i < n - 1 ? str + split : str;
    }
    return result
}

const repeatString_3 = (str, n, split) => {
    return (str+split).repeat(n-1)+str;
}

/*
console.log(repeatString_3('yo', 3, ' '))
console.log(repeatString_3('yo', 3, ','))*/
