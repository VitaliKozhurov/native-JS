// Promise

// Promise state:
// pending
// fulfilled
// reject

/*const Promise = (executor) => {
    const resolve = (data) => {
        return {
            state: fulfilled,
            data: data
        }
    }

    const rejected = (error) => {
        return {
            state: rejected,
            data:error
        }
    }

    executor(resolve, rejected)
}*/

const server = {
    getData() {
        return new Promise((resolve, reject) => {
            const data = [1, 2, 3]
            setTimeout(() => {
                if (data.length > 2) {
                    resolve()       //  что передали в resolve, то и возвращаем в промисе
                }
                reject('Ooops :-(')
            }, 3000)

        })
    }
}

const pr = server.getData();
pr
    .then(data => data)
    .then(data=>console.log(data))
    .catch((err) => console.log('Error :  ', err))
console.log(pr)
