"use strict";


// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", start);

const products = [
    {
        name: "Shampoo",
        price: 10,
        inStock: true,
    },
    {
        name: "Cheese",
        price: 7,
        inStock: false,
    },
    {
        name: "Banana",
        price: 1,
        inStock: true,
    },
];

function start(event) {
    console.log("script is running")
    document.querySelector("#create-form").addEventListener("submit", submitForm);
    showProducts(filterProductProperty(products, "inStock"));
}

function filterProductProperty(products, property) {
    return products.filter((product) => product[property] === true);
}

function showProducts(products) {
    document.querySelector("#list-container").innerHTML = "";
    
    for (const product of products) {
        showProduct(product);
    }
}

function showProduct(product) {
    const html = /*html*/`
    <ul>Name: ${product.name}, Price: ${product.price}, In Stock: ${product.inStock}</ul>
    `;

    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
}

function submitForm(event) {
    console.log("CLICK");
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const inStock = form.inStock.checked;

    console.log(name);
    console.log(price);
    console.log(inStock);

    createProduct(name, price, inStock);
    showProducts(filterProductProperty(products, "inStock"));
}



function createProduct(name, price, inStock) {
    const newProduct = { name, price, inStock };

    products.push(newProduct);
}
