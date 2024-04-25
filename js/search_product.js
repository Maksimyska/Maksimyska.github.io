import productsData from './products.js';

// Функция для отображения информации о товаре на странице товара
function displayProduct(product) {
    const productContainer = document.querySelector('.product-container');
    const productImage = document.querySelector('.product-image');
    const productName = document.querySelector('.product-name');
    const productPrice = document.querySelector('.product-price');

    productImage.src = product.imgSrc;
    productName.textContent = product.name;
    productPrice.textContent = `Стоимость товара: ${product.price}`;
}

// Добавляем товары в контейнеры при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    // Получаем параметр index из URL
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    if (index !== null) {
        // Получаем товар из массива productsData по индексу
        const selectedProduct = productsData[index];
        document.title = selectedProduct.name;
        // Отображаем информацию о товаре на странице
        displayProduct(selectedProduct);
    } else {
        console.error("Index not found in URL");
    }
});
