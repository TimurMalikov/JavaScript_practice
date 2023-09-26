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
const buttonClear = document.querySelector('.clear-btn'); // кнопка для быстрой очистки localStorage и перезагрузки стр

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
    let dataObj = {
        mail: emailInput.value,
        password: passwordInput.value,
        cnfrmPass: passwordCnfrmInput.value
    }
    localStorage.setItem("dataObj", JSON.stringify(dataObj))
    emailInput.value = "";  // Для проверки, выводятся ли данные в инпуты, стер значения при клике на кнопку отправить
    passwordInput.value = "";
    passwordCnfrmInput.value = "";
})

buttonClear.addEventListener('click', () => {
    localStorage.clear();
    location.reload()
})

    let getObj = JSON.parse(localStorage.getItem('dataObj'));
document.querySelector('.input1').value = getObj.mail; // Данные выводятся в инпуты после перезагрузки страницы
document.querySelector('.input2').value = getObj.password;
document.querySelector('.input3').value = getObj.cnfrmPass;
