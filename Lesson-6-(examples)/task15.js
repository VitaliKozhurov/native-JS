const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: 'Helen',
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: 'Ann',
        age: 20,
        isMarried: false,
        scores: 105
    },
];

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента

const getBestStudents = (students, count) => {
    if (!count) return students.sort((a, b) => a.scores - b.scores)[students.length - 1];
    return students.length <= count
        ? [...students, ...(new Array(count - students.length)).fill(null)]
        : students.sort((a, b) => b.scores - a.scores).slice(0, count)
}


console.log(getBestStudents(students))


// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]
