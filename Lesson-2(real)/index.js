let students = [
   {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85,
   },
   {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 89
   },
   {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
   },
   {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
   }
];

// CRUD

//C => [...students, newSt]
//R => map (obj => JSX.Element )  -- формируем массив JSX элементов
//U => map (condition? obj=>{...obj, prop:newValue}:obj )
//D => filter (condition)

/* const getNames = (array) => {
   const newArr = [];

   const elemMapFunc = (st) => st.name

   for (let i = 0; i < array.length; i++) {
      newArr[i] = elemMapFunc(array[i]);
   }
   return newArr;
} */

//console.log(getNames(students))

/* const getSimpleSt = (array) => {
   const result = [];

   const elMapFn = (st) => ({ name: st.name, scores: st.scores })

   for (let i = 0; i < array.length; i++) {
      result[i] = elMapFn(array[i]);
   }
   return result;
} */


// Map
const selfMadeMap = (array, cb) => {
   const result = [];
   for (let i = 0; i < array.length; i++) {
      result[i] = cb(array[i]);
   }
   return result;
}
const elMapFn = (st) => ({ name: st.name, scores: st.scores })


// Filter
const myFilter = (array, cb) => {
   const result = [];
   for (let i = 0; i < array.length; i++) {
      if (cb(array[i])) {
         result[result.length] = array[i];
      }
   }
   return result
}


const myIncludes = (array, elem) => {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === elem) {
         return true
      }
   }
   return false
}

// Push
const myPush = (array, ...els) => {

   for (let i = 0; i < els.length; i++) {
      array[array.length] = els[i];
   }

   return array.length
}