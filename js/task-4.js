`use strict`

const loginForm = document.querySelector('.login-form')
const label = document.querySelectorAll('.login-form label')
const input = document.querySelectorAll('.login-form label input')

label.forEach(labelItem => labelItem.classList.add('label-style4'))
input.forEach(inputItem => inputItem.classList.add('input-style4'))

const btn = document.querySelector('button[type=submit]')

btn.classList.add('btn-style4')

const onFormFoo = event => {
event.preventDefault();
const emailInput = event.currentTarget.elements.email
const passwordInput = event.currentTarget.elements.password

if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in')
}else{
    const data = new FormData(loginForm)
    const formInfo = {}
    data.forEach((newWalue, newKey) => {
        formInfo[newKey] = newWalue.trim()  
    });
    
    console.log(formInfo);
    
    event.currentTarget.reset();
}
}

loginForm.addEventListener('submit', onFormFoo);



// Альтернатива для виведення обєкту з данними форми

// const formEl = event.currentTarget.elements;

//   const info = {
//     email: formEl.user_email.value,
//     pass: formEl.user_password.value,
//     message: formEl.user_comment.value,
//   };