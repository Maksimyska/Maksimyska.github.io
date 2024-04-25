// Массив с товарами (пример данных)
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

// Функция для добавления товаров в контейнер
function addProductsToContainers(products) {
    const containerMain = document.querySelector('.container_main');

    products.forEach((product, index) => {
        if (index % 2 === 0) {
            const row = document.createElement('div');
            row.classList.add('container_row');
            containerMain.appendChild(row);
        }

        const containerRow = document.querySelectorAll('.container_row');
        const currentRow = containerRow[containerRow.length - 1];

        const productHTML = `
        <a href="../pages/product.html"
        <div class="card_tovar">
          <img class="img_tovar" src="${product.imgSrc}">
          <p class="name_tovar">${product.name}</p>
          <p class="price_tovar">${product.price}</p>
        </div>
        </a>
      `;

        currentRow.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Добавляем товары в контейнеры при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    addProductsToContainers(productsData);
});