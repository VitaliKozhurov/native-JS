// Внесите  следующие изменения в объект superUser:
const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}


//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1= {...superUser, friends: superUser.friends.filter(su=>su.id!==1)}

console.log(superUserCorrect1)