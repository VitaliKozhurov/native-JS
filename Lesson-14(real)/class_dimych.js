// function constructor
function DeleteUser(userID) {
    // this === {}
    (this.type = "DELETE-USER"),
        (this.payload = {
            userID: userID,
        });
}

DeleteUser.prototype.showType = function () {
    console.log(this.type);
};

const obj_1 = DeleteUser(1);
// console.log(obj_1); // undefined
// при такой записи ничего не возвращается, а в this
// записываются свойства type и payload
// window.type === DELETE-USER
// window.payload === {userID: userID}

const obj_2 = new DeleteUser(1);
// console.log(obj_2);
// DeleteUser { type: 'DELETE-USER', payload: { userID: 1 } }

// obj_2.__proto__ === DeleteUser.prototype === {constructor: ƒ}

// console.log(obj_2); // DeleteUser { type: 'DELETE-USER', payload: { userID: 1 } }
// console.log(obj_2.__proto__); // { showType: [Function (anonymous)] }
// obj_2.showType(); // DELETE-USER

class DeleteUserClassAction {
    constructor(userID) {
        this.type = "DELETE-USER";
        this.payload = {
            userID: userID,
        };
    }
    // методы сразу записываются в прототип в классах
    showClassType() {
        console.log(this.type);
    }
}

const obj_3 = new DeleteUserClassAction("123");
// console.log(obj_3);
/* DeleteUserClassAction {
    type: 'DELETE-USER',
    payload: { userID:'123' }
  } */

// console.log(obj_3.showClassType()); // DELETE-USER
// console.log(DeleteUserClassAction.prototype);
// {
//  constructor: class DeleteUserClassAction
//  showClassType: ƒ showClassType()
// }

// console.log(obj_3.__proto__ === DeleteUserClassAction.prototype); // true

/* class Counter {
    constructor() {
        this.counter = 0;
    }
    increaseCounter() {
        this.counter++;
    }
}

const counter_1 = new Counter();
console.log(counter_1.counter); // 0
counter_1.increaseCounter();
console.log(counter_1.counter); // 1 */

class User {
    constructor(name) {
        this.name = name;
    }
}

const user_1 = new User("Alex");
// console.log(user_1); // User { name: 'Alex' }

// Наследование

class Coder extends User {
    code() {
        console.log(this.name + " " + "It is my code 2+2");
    }
}

const coder = new Coder("Max");
// console.log(coder); // Coder { name: 'Max' }
console.log(User.prototype);
//{
//  constructor: class User
// }
console.log(Coder.prototype);
//{
//  constructor: class Coder
//  code: ƒ code()
// }

class UpdatedUser extends Coder {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    hello() {
        super.code();
        console.log("Hello!");
    }
}
const user_2 = new UpdatedUser("Sanya", "JS");
console.log(user_2); // UpdatedUser { name: 'Sanya', language: 'JS' }
user_2.hello(); //Sanya It is my code 2+2  Hello!
