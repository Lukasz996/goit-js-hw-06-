const categoriesList = document.querySelector('#categories')
const categoriesItems = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesItems.length}`)

categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent
    const elementsCount = category.querySelectorAll('li').length

    console.log(`Category: ${categoryName} Elements: ${elementsCount}`);
})