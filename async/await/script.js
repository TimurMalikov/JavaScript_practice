// Часть 1
// Создайте асинхронную функцию, которая будет симулировать загрузку данных из удаленного сервера.
// Используйте async/await для выполнения параллельных запросов к серверу и обработки результатов.

function getData (delay) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Please wait, loading...');
        }, delay);
    });
}

async function dataProcessing (userId) {
    try {
        await getData(2000);
        const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(data => {
            if(data.ok) {
                return data.json()
            } else {
                return Promise.reject('Error')
            }
        })
        .catch(err => {
            return err
        })
        return response;  
    } catch (error) {
        return Promise.reject(error)
    }
    
}

async function parallelFetching () {
    try {
        console.log('Please wait, loading...');
        const users = await Promise.all([dataProcessing(randomNumber(1, 10)), dataProcessing(randomNumber(1, 10)), dataProcessing(randomNumber(1, 10))])
        console.log('parallelDataProcessing', users);
    } catch (error) {
        console.error(error)
    }
   
}

async function fetching () {
    try {
        console.log('Please wait, loading...');
    const user = await dataProcessing(randomNumber(1, 10));
    console.log(user);
    } catch (error) {
        console.error(error);
    }
    
}

fetching();
parallelFetching();

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
