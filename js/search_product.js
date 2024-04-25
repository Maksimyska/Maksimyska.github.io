// import productsData from './products.js';
const productsData = [
    {
        imgSrc: "/img/50 kop.png",
        name: "Уникальные 50 коп.",
        price: "500 р."
    },
    {
        imgSrc: "/img/flowers.png",
        name: "Горшок с цветами",
        price: "743 р."
    },
    {
        imgSrc: "/img/teapot.png",
        name: "Электрический чайник",
        price: "1000 р."
    },
    {
        imgSrc: "/img/trash.png",
        name: "Обычный стикер мусорки",
        price: "463 р."
    },
    {
        imgSrc: "/img/sword-CSS.png",
        name: "Детский игрушечный меч",
        price: "800 р."
    },
    {
        imgSrc: "/img/car.png",
        name: "Картинка машины",
        price: "268 р."
    }
];

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
