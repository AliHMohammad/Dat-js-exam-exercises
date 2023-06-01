"use strict";

window.addEventListener("load", start);

const products = [
    {
        name: "Shampoo",
        price: 10,
        inStock: false,
    },
    {
        name: "Cheese",
        price: 20,
        inStock: true,
    },
    {
        name: "Milk",
        price: 5,
        inStock: false,
    }
];

function start(event) {
    console.log("script");
    document.querySelector("#create-form").addEventListener("submit", createProductObject);
    sortProductsByStock();
    showProducts(products);
}

function showProducts(products) {
    document.querySelector("#list-container").innerHTML = "";
    
    for (let i = 0; i < products.length; i++){
        showProduct(products[i]);
    }
}

function showProduct(product) {
    const html = /*html*/ `
    <article>
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <p>${product.inStock ? "In Stock" : "Out of Stock"}</p>
    </article>
    `;

    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
}

function sortProductsByStock() {
    products.sort((a, b) => b.inStock - a.inStock);
}

function createProductObject(event) {
    event.preventDefault();

    const form = event.target;

    const product = { name: form.name.value, price: form.price.value, inStock: form.inStock.checked };

    products.push(product);
    refreshProductsView()
}

function refreshProductsView() {
    sortProductsByStock();
    showProducts(products);
}

