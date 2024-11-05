const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.getElementsByClassName('item');

console.log(`Number of categories:`, categoriesItems.length);

for (let i = 0; i < categoriesItems.length; i++) {
    const categoryItem = categoriesItems[i];

    const header = categoryItem.getElementsByTagName('h2')[0].innerText;

    const subItems = categoryItem.getElementsByTagName('li');

    console.log(`Category: ${header}`);
    console.log(`Elements: ${subItems.length}`);
}