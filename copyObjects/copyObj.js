// 1. Цикл For in    не подходит для глубокого копирования

let originalObj = {
    a: 10,
    b: {
        c: 'string',
        d: 2
    }
};

let copiedObject = {};

for (let key in originalObj) {
    console.log(key)
    copiedObject[key] = originalObj[key]
}

copiedObject.b.d = 34;
console.log(originalObj);
console.log(copiedObject);

//2. Obejct.assign() тоже не подходит для глубокого копирования

copiedObject = Object.assign(copiedObject, originalObj); //1-й аргумент, это то куда мы хотим скопировать, 2-й аргумент - это что мы хотим скопировать. На место 1-го аргумента можно поставить {}
copiedObject.b.d = 11;
console.log(copiedObject);
console.log(originalObj);