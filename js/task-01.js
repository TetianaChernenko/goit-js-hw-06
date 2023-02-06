const listEl = document.querySelector("#categories");
const itemEl = listEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});