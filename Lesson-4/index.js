const td_1 = 'qw-34';
const td_2 = 'rv-34';

const todoLists = [
    {
        id: td_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: td_2,
        title: 'What to buy',
        filter: 'all',
    },
]

const tasks = {
    [td_1]: [
        {id: 1, title: 'JS', isDone: false},
        {id: 2, title: 'React', isDone: false},
        {id: 3, title: 'Rest API', isDone: false},
    ],
    [td_2]: [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Chicken', isDone: false},
    ]
}

/*console.log(tasks[td_1])
console.log(tasks[td_1].filter(task => task.id !== 2))
console.log([...tasks[td_1]], {id: 10, title: 'new tasks', isDone: false})*/


const addTodoList = (title) => {
    const td_id = 'rt-fg';
    const newTodo = {
        id: td_id,
        title: title,
        filter: 'all'
    }

    const updatedTodoList = [...todoLists, newTodo];

    console.log(updatedTodoList)

    const copyTasks = {...tasks};
    copyTasks[td_id] = [];

    // const copyTasks = {...tasks, [td_id]:[]}
    console.log(copyTasks)
}

addTodoList('What to drink')


const arr = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
    ,
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];


function findHack(arr) {
    const obj = {
        "A":30,
        "B":20,
        "C":10,
        "D":0
    }
    let res = [];

    for(let i=0;i<arr.length;i++){
        let elem = arr[i];
        console.log(elem)
        /*if(arr[i][0]>200) continue;
        let score=0;
        for(let el of arr[i][2]){
            if(el in obj){
                score+=obj[el]
            }
        }
        if(score>200) continue;
        res.push(arr[i][0])*/
    }
    console.log(res)
    return res
}

findHack(arr)