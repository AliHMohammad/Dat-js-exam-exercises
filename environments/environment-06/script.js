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
    for (let i = 0; i < products.length; i++) {
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

    document.querySelector("#products article:last-child button").addEventListener("click", () => addToBasket(product));
}

function addToBasket(product) {
    const findProduct = basket.find((basketItem) => basketItem.product === product);

    if (!findProduct) {
        const productAndCount = { product, count: 1 };
        basket.push(productAndCount);
    } else {
        findProduct.count += 1;
    }

    showBasket(basket);
}

function removeFromBasket(product) {
    if (product.count > 1) {
        product.count -= 1;
    } else if (product.count === 1) {
        const index = basket.indexOf(product);
        basket.splice(index, 1);
    }

    showBasket(basket);
}

function showBasket(basket) {
    document.querySelector("tbody").innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        showBasketItem(basket[i]);
    }
}

function showBasketItem(basketItem) {
    const html = /*html*/ `
    <tr>
        <td>
            <button class="remove">-</button>
            ${basketItem.count}
            <button class="add">+</button>
        </td>
        <td>${basketItem.product.name}</td>
        <td>${basketItem.product.price},- pr. styk</td>
        <td>${basketItem.count * basketItem.product.price},-</td>
    </tr>
    `;

    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);

    document.querySelector("tbody tr:last-child .remove").addEventListener("click", () => removeFromBasket(basketItem));
    document.querySelector("tbody tr:last-child .add").addEventListener("click", () => addToBasket(basketItem.product));
}
