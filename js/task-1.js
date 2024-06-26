`use strict`



const items = document.querySelectorAll('.item')
// console.log(items);

const categoriesNr = () =>
items.length;

const categoriesQuantity = categoriesNr();
console.log(`Number of categories: ${categoriesQuantity}`);


items.forEach(item => {
    const itemName = item.querySelector('h2').textContent;
    const itemList = item.querySelectorAll('li').length;
    console.log(`Category: ${itemName} \nElements: ${itemList}`);
});

const allLiItems = document.querySelectorAll('#categories .item li');
console.log(allLiItems);
allLiItems.forEach(liItem => liItem.classList.add('list-item-style'))

