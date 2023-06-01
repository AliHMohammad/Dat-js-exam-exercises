"use strict";

window.addEventListener("load", start);

const products = [
    {
        name: "Shampoo",
        price: 10,
        inStock: false,
    },
    {
        name: "Butter",
        price: 7,
        inStock: true,
    },
    {
        name: "Milk",
        price: 5,
        inStock: false,
    },
];

function start(event) {
    console.log("Script");
    document.querySelector("#select-sort-by").addEventListener("change", sortProducts);
    showProducts(products);
}

function showProducts(products) {
    document.querySelector("#list-container").innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        showProduct(products[i]);
    }
}

function showProduct(product) {
    const html = /*html*/ `
    <article>
        <h2>${product.name}</h2>
        <h3>${product.price}</h3>
        <p>${product.inStock ? "In stock" : "Out of Stock"}</p>
    </article>
    `;

    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
}

function sortProducts() {
    const sortValue = document.querySelector("#select-sort-by").value;
    console.log(sortValue);

    if (sortValue === "inStock" || sortValue === "price") {
        products.sort((a, b) => b[sortValue] - a[sortValue]);
    } else {
        products.sort((a, b) => a[sortValue].localeCompare(b[sortValue]));
    }
    showProducts(products)
}


