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

// Функция для добавления товаров в контейнеры при загрузке страницы
function addProductsToContainers(products) {
    const containerMain = document.querySelector('.container_products');

    products.forEach((product, index) => {
        if (index % 2 === 0) {
            const row = document.createElement('div');
            row.classList.add('container_row');
            containerMain.appendChild(row);
        }

        const containerRow = document.querySelectorAll('.container_row');
        const currentRow = containerRow[containerRow.length - 1];

        const productHTML = `
            <div class="card_tovar" data-index="${index}">
                <img class="img_tovar" src="${product.imgSrc}">
                <p class="name_tovar">${product.name}</p>
                <p class="price_tovar">${product.price}</p>
            </div>
        `;

        currentRow.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Добавляем товары в контейнеры при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    addProductsToContainers(productsData);

    // Добавляем обработчик события click на контейнер товара
    const productContainers = document.querySelectorAll('.card_tovar');
    productContainers.forEach(container => {
        container.addEventListener('click', function () {
            // Получаем индекс товара из атрибута data-index
            const index = this.getAttribute('data-index');
            // Перенаправляем пользователя на страницу товара с индексом index
            window.location.href = `../pages/product.html?index=${index}`;
        });
    });
});

