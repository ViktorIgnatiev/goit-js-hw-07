function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const spanTextColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body')

const changeColorBtnFoo = () =>{
  spanTextColor.textContent = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor();
}


changeColorBtn.addEventListener('click', changeColorBtnFoo)