"use strict";


window.addEventListener("load", start);

let products = [];
const basket = [];

async function start(event) {
    products = await getProducts();

    showProducts(products);
}

async function getProducts() {
    const response = await fetch("./products.json");
    const products = await response.json();
    return products;
}

function showProducts(products) {
    
    for (let i = 0; i < products.length; i++){
        showProduct(products[i]);
    }
}

function showProduct(product) {
    const html = /*html*/ `
    <article>
        <h3>${product.name}</h3>
        <p>vægt: ${product.weight}g</p>
        <p>pris: ${product.price},-</p>
        <button>Læg i kurv</button>
    </article>
    `;

    document.querySelector("#products").insertAdjacentHTML("beforeend", html);

    document.querySelector("#products article:last-child button").addEventListener("click", () => addProductToBasket(product));

}

function addProductToBasket(product) {
    basket.push(product);
    showBasket(basket)
}

function showBasket(basket) {
    document.querySelector("tbody").innerHTML = "";
    
    for (let i = 0; i < basket.length; i++){
        showBasketItem(basket[i]);
    }
}

function showBasketItem(basketItem) {
    const html = /*html*/ `
    <tr>
        <td>
            <button class="remove">-</button>
            ANTAL
            <button class="add">+</button>
        </td>
        <td>${basketItem.name}</td>
        <td>${basketItem.price},- pr. styk</td>
        <td>PRIS I ALT,-</td>
    </tr>
    `;

    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}

