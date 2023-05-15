//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает строку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString_1 = (str, n, splitter) => {
    return Array(n).fill(str).join(splitter);
}

const repeatString_2 = (str, n, splitter) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += i < n - 1 ? str + splitter : str;
    }
    return result
}

const repeatString_3 = (str, n, splitter) => {
    return (str+splitter).repeat(n-1)+str;
}

/*
console.log(repeatString_3('yo', 3, ' '))
console.log(repeatString_3('yo', 3, ','))*/
