const obj = {
    name: 'John',
    age: 25,
    city: 'London'
};

const test = 'John';

function delayPrint (message, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof message === 'string') {
                console.log(message);
                resolve (message);
            } else {
                reject ('Ошибка');
            }
        }, delay);
    });
}

    function fetchData (object) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (typeof object === 'object') {
                    resolve(JSON.stringify(object));
                } else {
                    reject ('Ошибка');
                }
            }, 2000);
        });
    }

    delayPrint ('Начинаю загрузку данных...', 2000)
    .then(() => {
        setTimeout(() => {
            console.log('Данные получены!');
        }, 1000);
    })
    .then (() => fetchData (obj))
    .then(result => {
        console.log (result);
    })
    .catch (() => {
        console.error('Произошла ошибка');
    });