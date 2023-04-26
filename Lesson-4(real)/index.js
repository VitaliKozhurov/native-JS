const todoListId_1 = 'todo_1';
const todoListId_2 = 'todo_2';

const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
    },
]

const tasks = {
    [todoListId_1]: [
        {
            id: 1, title: 'JS', isDone: false
        },
        {
            id: 2, title: 'React', isDone: false
        },
    ],
    [todoListId_2]: [
        {
            id: 1, title: 'Bread', isDone: false
        },
        {
            id: 2, title: 'Milk', isDone: false
        },
    ]
}


const changeStatus = (taskId, status) => {
    const todoListsTasksForUpdate = tasks[todoListId_1] // array
    const updatedTasksForTodoList = todoListsTasksForUpdate.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    const copyTasks = {...tasks}
    copyTasks[todoListId_1] = updatedTasksForTodoList
    setTasks(copyTasks)
//----------------------------//

    setTasks({
        ...tasks,
        [todoListId_1]: tasks[todoListId_1].map(task => task.id === taskId ? {...task, isDone: status} : task)
    })
}

const removeTask = (taskId, todoListId) => {

    const updatedTasks = tasks[todoListId].filter(t=>t.id!==taskId)
    setTasks({
        ...tasks,
        [todoListId]: updatedTasks
    })

}