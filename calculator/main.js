'use strict';

// Exercise 1

/*let num = 26;
let Num = 4;
let str = 'congratulation';
let bln = true;

console.log(`${num} - ${typeof(num)}`);
console.log(Num, typeof(Num));
console.log(`${str} - ${typeof(str)}`);
console.log(bln, typeof(bln));

console.log(num + Num);
console.log(num - Num);
console.log(num * Num);
console.log(num / Num);*/

// Exercise 2*

/*let element = 'Вода Земля Огонь Воздух';
let elementArr = element.split(' ');
console.log(elementArr);*/

/*let variable1 = 0n;
console.log(typeof variable1);

let nan1 = NaN;
console.log(typeof nan1);


console.log(3 + 3);
console.log('3' + '3');
console.log('3' + + 3);
console.log(3 + + '3');
console.log(3 + 3 - 3);
console.log('3' + '3' - '3');*/

/* Exercise 3

1.1 Напсиать функцию, которая принимает на вход два числа, и выводит их произведение. Сделать проверку,
если передается не число, а строка, при этом возвращать текстовую ошибку, что аргумент должен быть числом.*/

// function multiplication(num1, num2) {                               // Объявляется функция с 2 аргументами
//     const result = num1 * num2;                                     // Объявляется переменная равная произведению 2-х переданных аргументов
//     if (typeof num1 === 'string' || typeof num2 === 'string') {     // Условие Если (тип арг-та num1 равен строковому типу ИЛИ тип арг-та num2 равен строковому типу)
//         console.log('Аргумент должен быть числом!');                // Выводится ошибка в консоль
//     } else {                                                        // Иначе (т.е. тип данных обоих аргументов равен числу)
//         console.log(result, 'Done');                                // Результат выводится в консоль
//     }
// }

// multiplication(6, 25);                                              // Вызов функции

/* Exercise 4

1.2 Написать функцию, которая принимает число и проверяет, простое оно или нет.
Простое число делится на единицу и на самого себя. Возвращать true или false.*/

// function checkNumber(arg) {            // Объявляется функция в которую передается аргумент
//     for (let i = 2; i < arg; i++) {    // Цикл для проверки деления аргумента на каждое число, стоящего до него (i)
//         if (arg % i === 0) {           // Условие: если остаток при делении аргумента на число (i) равен 0 => по условию true, =>
//             console.log(false, i);     // В консоль выводится false и число (i) на которое делится без остатка
//             return false;              // Возвращаем значение false
//         }
//     }
//     console.log(arg !== 1);            // т.к. условие не сработало, значит число простое, в консоль выводится true
//     return arg !== 1;                  // Возвращаем значение true
// }

// checkNumber(103);                      // Вызов функции

/* Exercise 5 

Напишите функцию, которая генерирует случайный пароль заданной длины 
(например, 8 символов) из букв верхнего и нижнего регистра, цифр и специальных символов. */

// function generatePass(len) {                                                                  // len - аргумент уславливающий длину пароля
//     const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Переменная содержащая символы из которых должен состоять пароль
//     let password = '';                                                                        // Объявляем переменную в которую поместится сгенерированный пароль
//     for (let i = 0; i < len; i++) {                                                           // Цикл( i с нуля, т.к. отсчет в JS начинается с 0)
//         password += chars.charAt(Math.floor(Math.random() * chars.length));                   // chars.charAt возвращает символ соответствующий, вычисленному аргументу, из переменной chars(Math.floor округляет аргумент к меньшему значению (Math.random() генерит случайное число в диапозоне от 0 до 1, далее умножается на длину переменной chars)) для удобства читать в обратном порядке
//     }
//     console.log(password);                                                                    // Выводит сгенерированный пароль в консоль 
//     return password;                                                                          // Возвращает значение в переменной
// }

// generatePass(8);                                                                              // Вызов функции (длина пароля 8 символов, можно подставить другое значение)


/* Exercise 6

Написать простой калькулятор для сложения, вычитания, деления, умножения.
Обрабатывать ошибки с неправильной операцией. Сверстать форму и выводить результат в HTML.*/

const input1 = document.getElementById('firstArgument');
const operator = document.getElementById('symbol');
const input2 = document.getElementById('secondArgument');
const outputElement = document.getElementById('output');
const submitBtn = document.getElementById('submit');
const messageError = document.getElementById('msgError');

let firstInput;
input1.addEventListener("change", event => {
  firstInput = event.target.value;
  input1.innerText = firstInput;
});

let secondInput;
input2.addEventListener("change", event => {
  secondInput = event.target.value;
  input2.innerText = secondInput;
});

let operatorInput;
operator.addEventListener("change", event => {
  operatorInput = event.target.value;
  input2.innerText = operatorInput;
});

function printResult (sum) {
  if(sum < 0) {
    outputElement.style.color = "red";
  } else {
    outputElement.style.color = "green";
  }
  outputElement.textContent = sum;
}

function clearMessage () {
  if(operatorInput === "+" || operatorInput === "-" || operatorInput === "*" || operatorInput === "/") {
    messageError.textContent = null;
  }
}

submitBtn.onclick = function() {
let result = null;

if(operatorInput === "+") {
    result = +firstInput + +secondInput;
    printResult(result);
    clearMessage();  
} else if (operatorInput === "-") {
    result = +firstInput - +secondInput;
    printResult(result);
    clearMessage();
} else if(operatorInput === "*") {
    result = +firstInput * +secondInput;
    printResult(result);
    clearMessage(); 
} else if(operatorInput === "/") {
    result = +firstInput / +secondInput;
    printResult(result);
    clearMessage();      
} else {
  messageError.textContent = "Возможно использование только  +, -, *, /";
  messageError.style.color = "orange";
}};


/* Exercise 7 - необязательная

Создайте функцию rotateArray, которая принимает массив и число k, а затем циклически сдвигает элементы 
массива вправо на k шагов. Например, если k = 2, то [1, 2, 3, 4, 5] станет [4, 5, 1, 2, 3].*/

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//     step = 2;

// function rotateArray(arr, k) {
//   for (let i = 0; i < step; i++){
//     a.unshift(a.pop());                 // a - массив.unshift добавляет один или более элементов в начало массива и возвращает новую длину массива(pop удаляет последний элемент из массива и возвращает его значение.)
//   }
//   console.log(a);
// }
// rotateArray(a, step);