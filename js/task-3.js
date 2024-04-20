`use strict`

const input = document.querySelector('#name-input')
console.log(input);

const span = document.querySelector('#name-output')
console.log(span);

input.addEventListener('input',(event) => {
    if ( event.currentTarget.value.trim() === '') { 
            span.textContent = 'Anonymous'
    }
    span.textContent = event.currentTarget.value;
})

input.classList.add('input-style3')
