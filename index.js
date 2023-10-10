
const products = [
    {
        name: "Телефон Samsung Galaxy S21",
        price: 1200,
        category: "телефони",
        description: "Новий смартфон від Samsung з потужним процесором.",
        image: "https://m.media-amazon.com/images/I/51uY7NMVP4L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        name: "Ноутбук Dell XPS 13",
        price: 2100,
        category: "ноутбуки",
        description: "Популярний ноутбук з великим дисплеєм.",
        image: "https://m.media-amazon.com/images/I/61uCHVcsAvL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },

    {
        name: "Apple Watch Series 9",
        price: 1300,
        category: "годинники",
        description: "Apple Watch Series 9 допомагає залишатися на зв’язку, підтримувати здоров’я, безпеку й активний спосіб життя.",
        image: "https://m.media-amazon.com/images/I/81q7NndDVuL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
    },
    {
        name: "SAMSUNG Galaxy Tab A8 10.5",
        price: 500,
        category: "планшети",
        description: "10,5-дюймовий планшет середнього рівня. Він має строгий практичний дизайн, завдяки чому гармонійно виглядатиме в будь-яких умовах.",
        image: "https://m.media-amazon.com/images/I/61krikJxTmL._AC_SX466_.jpg"
    },
];

// Функція для відображення товарів
function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Посилання на елементи сторінки
const priceRange = document.getElementById("priceRange");
const priceLabel = document.getElementById("priceLabel");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");




// Функція для відображення товарів залежно від вибраної ціни
function filterProductsByPrice() {
    const selectedPrice = parseInt(priceRange.value, 10);
    priceLabel.textContent = `$${selectedPrice}`;

    // Фільтрація товарів на основі вибраної ціни
    const filteredProducts = products.filter(product => product.price <= selectedPrice);

    // Результати фільтрації
    displayProducts(filteredProducts);
}

// Функція для фільтрації за назвою
function filterProductsByName() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
}

// Функція для сортування за типом товару
function sortProductsByCategory() {
    const selectedCategory = categorySelect.value;
    
    if (selectedCategory === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    }
}



priceRange.addEventListener("input", filterProductsByPrice);
searchInput.addEventListener("input", filterProductsByName);
categorySelect.addEventListener("change", sortProductsByCategory);


displayProducts(products);