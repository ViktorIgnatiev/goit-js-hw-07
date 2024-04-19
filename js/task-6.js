function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

input.classList.add('input-style');
createBtn.classList.add('createBtn-style') 
destroyBtn.classList.add('destroyBtn-style') 
boxesContainer.classList.add('box-div-stile')

function createBoxes(amount) {
  destroyBoxes(); 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createBtn.addEventListener('click', () => {
  const amount = input.value.trim();
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes()
})