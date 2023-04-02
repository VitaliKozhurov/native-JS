//  Примитивы
//  string, number, boolean, null, undefined, BigInt, Symbol


//  Объекты
//  Имеют сложную структуру
//  Имеют свойства и методы
//  Ссылочный тип данных
//  Object (array, function, object)

const num = 5;

const obj = {}; // в переменной будет записана ссылка на ячейку памяти где хранится объект
// {}-литерал объекта, new Object

const user = {
   name: 'Bob',
   age: 22,
   isStudent: false,
}

const copyUser = {
   ...user,
   //name:'Bob',
   //age:22,
   //isStudent:false,
   isStudent: true
}; // копирование через деструктуризацию c изменением свойства

const arr = [1, 2, 3, 4, 5];
const copyArr = [...arr];

function stateChecker(currentState, nextState) {
   if (currentState === nextState) {
      console.log('изменений нет, страницу не меняем')
   } else {
      console.log('изменения произошли, надо обновить страницу')
   }
}

// stateChecker(user, copyUser);

// CRUD:
//Create
//Read
//Update
//Delete


const students = [
   {
      name: 'Alex',
      age: 20,
      address: {
         city: 'Minsk'
      }
   }
]

// add new Student "CREATE"
const newStudent = {
   name: 'John',
   age: 23,
   address: {
      city: 'Brest'
   }
}

const students_1 = [...students, newStudent]; // создали новый массив(копию) и в него добавили нового студента

// stateChecker(students, student_1); вернет сообщение о необходимости перерисовки
// React пройдет по новому массиву и просмотрит появились в нем новые объекты, новый объект он перерисует, а старые трогать не будет

// Чтобы произвести изменения, сначала копируем и в копии производим изменения

// UPDATE (меняем адрес студента)
const students_2 = students_1.map(st => st.name === 'John'
   ? { ...st, address: { ...st.address, city: 'Grodno' } }
   : st
)

// stateChecker(students_1, students_2);

// DELETE
// Используем метод фильтр
const students_3 = students_2.filter(st => st.name !== 'Alex');

//stateChecker(students_2, students_3);

