//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart_1 = (str, subStr) => {
return str.toLowerCase().startsWith(subStr.toLowerCase())
}

const checkStart_2= (str, subStr) => {
    return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}

const checkStart_3= (str, subStr) => {
    return str.toLowerCase().indexOf(subStr.toLowerCase()) === 0;
}


/*
console.log(checkStart_3("Incubator", "inc"));
console.log(checkStart_3("Incubator", "yo"));*/
