// // 1. Цикл For in    не подходит для глубокого копирования

// let originalObj = {
//     a: 10,
//     b: {
//         c: 'string',
//         d: 2
//     }
// };

// let copiedObject = {};

// for (let key in originalObj) {
//     console.log(key)
//     copiedObject[key] = originalObj[key]
// }

// copiedObject.b.d = 34;
// console.log(originalObj);
// console.log(copiedObject);

// //2. Object.assign() тоже не подходит для глубокого копирования

// copiedObject = Object.assign(copiedObject, originalObj); //1-й аргумент, это то куда мы хотим скопировать, 2-й аргумент - это что мы хотим скопировать. На место 1-го аргумента можно поставить {}
// copiedObject.b.d = 11;
// console.log(copiedObject);
// console.log(originalObj);

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // ключи
//     // alert( key );  // name, age, isAdmin
//     console.log(key, user[key]);
//     // значения ключей
//     // alert( user[key] ); // John, 30, true
//   }

//   function getTimeFromMinutes(n) {
//     let result;
//     let hours = n / 60;
//     let minutes = ;
//     result += `Это ${hours} часа и ${minutes} минут`;
//     console.log(result);
//     return result;
// }

  const someObject = {
    month: "August",
    year: 2023,
      deal: {
        car: "Volkswagen",
        release: 2020,
      }
  };

    function deepCopy (data) {
      let Obj = {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === "object") {
          Obj[key] = deepCopy(data[key]);
        } else {
          Obj[key] = data[key];
        }
      }
    }
    return Obj;
  }

  const clonedObject = deepCopy(someObject);
  clonedObject.deal.car = "Lada";
  clonedObject.deal.release = 2021;
  clonedObject.month = "July";
      console.log(clonedObject);
      console.log(someObject);