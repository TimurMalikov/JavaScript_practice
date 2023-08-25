/*
    1 часть
Создать форму из 3 полей - email, пароль, подтверждение пароля. 
Сделать проверку на пустые поля, на корректный email, на совпадение паролей и на минимальную длину пароля 8 символов.
В случае несоответствия выводить ошибки для каждого случая.

    ======================

Дополнительные материалы:
Проверка email на валидность с помощью регулярных выражений
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
*/

const emailInput = document.querySelector('.input1');
const errorEmail = document.querySelector('.err-mail');
const passwordInput = document.querySelector('.input2');
const errorPass = document.querySelector('.err-pass1');
const passwordCnfrmInput = document.querySelector('.input3');
const errorPass1 = document.querySelector('.err-pass2');
const buttonSubmit = document.querySelector('.submit-btn');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isEmailValide () {
if(!emailInput.value) {
    errorEmail.style.display = 'block';
    errorEmail.innerHTML = 'Поле не должно быть пустым';        
} else if(validateEmail(emailInput.value) !== true) {
    errorEmail.innerHTML = 'Некорректный e-mail';
    errorEmail.style.display = 'block';
} else {
    errorEmail.style.display = 'none';
}
}

function isPasswordValide () {
if(!passwordInput.value) {
    errorPass.innerHTML = 'Поле не должно быть пустым';
    errorPass.style.display = 'block';
} else if (passwordInput.value.length < 8) {
    errorPass.innerHTML = 'Пароль не должен быть короче 8 символов';
    errorPass.style.display = 'block';
} else {
    errorPass.style.display = 'none';
}
}

function isPassConfirmValide () {
    if(!passwordCnfrmInput.value) {
        errorPass1.innerHTML = 'Поле не должно быть пустым';
        errorPass1.style.display = 'block';
    } else if (passwordCnfrmInput.value !== passwordInput.value) {
        errorPass1.innerHTML = 'Пароль не совпадает';
        errorPass1.style.display = 'block';
    } else {
        errorPass1.style.display = 'none';
    }
    }

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault ();
    isEmailValide ();
    isPasswordValide ();
    isPassConfirmValide ();
})





const itemsInCart = [
    { product: 'Носки', quantity: 3 },
    { product: 'Штаны', quantity: 1 },
    { product: 'Кепка', quantity: 1 },
]

const clonedCart = [...itemsInCart];

console.log(itemsInCart);
console.log(clonedCart);

clonedCart[1].quantity = 5;
console.log(clonedCart);
console.log(itemsInCart);