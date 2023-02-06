const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
    let itemEl = document.createElement("li");
    itemEl.textContent = option;
    itemEl.classList.add('item');
  
    return itemEl;

  })
 
listEl.append(...elements);
console.log(listEl);




