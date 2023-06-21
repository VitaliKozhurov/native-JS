// promise -- object
// свойство state -- penfing, fullfilled, rejected
// свойство result -- undefined (вначале), далее результат выполнения промиса

/* const axios = {
    get() {
        let promise = new Promise((res, rej) => {
            setTimeout(() => {
                /* rej("Error"); */
/*res({ data: "data", message: "message" });
            }, 5000);
        });
        return promise;
    },
}; */

/* axios
    .get()
    .then((data) => {
        return data.message;
    })
    .then((data) => {
        console.log(data);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err)); */

const myFetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case "google":
                setTimeout(() => {
                    res("fetch from google");
                }, 2000);
                break;
            case "microsoft":
                setTimeout(() => {
                    res("fetch from microsoft");
                }, 3000);
                break;

            default:
                throw new Error("Unknow url");
        }
    });
};

/* myFetch("google")
    .then((data) => {
        console.log(data);
        return myFetch("microsoft");
    })
    .then((data) => console.log(data)); */

const makeRequest = async () => {
    const firstRes = await myFetch("google");
    console.log(firstRes);
    const secondRes = await myFetch("microsoft");
    console.log(secondRes);
};

makeRequest();
