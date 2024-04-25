import productsData from './products.js';

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

