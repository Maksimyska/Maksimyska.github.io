// Массив с товарами
const productsData = [
  {
    imgSrc: "/img/paint.png",
    name: "Картина по номерам",
    price: "3024₽",
  },
  {
    imgSrc: "/img/flowers.png",
    name: "Цветы",
    price: "1000₽",
  },
  {
    imgSrc: "/img/teapot.png",
    name: "Чайки",
    price: "1000₽",
  },
  {
    imgSrc: "/img/pk.png",
    name: "Системный блок",
    price: "1000₽",
  },
];

// Функция для добавления товаров в контейнер
function addProductsToContainer(products) {
  const container = document.querySelector(".container-product");

  products.forEach((product, index) => {
    const productHTML = `
        <div class="product">
          <img src="${product.imgSrc}" alt="фото товара" class="Photography">
          <p class="name">${product.name}</p>
          <p class="price">${product.price}</p>
          <img src="/img/trash.png" alt="" class="trash" data-index="${index}">
        </div>
      `;

    container.insertAdjacentHTML("beforeend", productHTML);
  });

  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("trash")) {
      const index = event.target.getAttribute("data-index");
      productsData.splice(index, 1);
      container.innerHTML = "";
      addProductsToContainer(productsData);
    }
  });
}

// Добавляем товары в контейнер при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  addProductsToContainer(productsData);
});
