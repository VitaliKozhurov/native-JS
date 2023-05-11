const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}


//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = {...user, friends: [...user.friends]}