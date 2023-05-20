"use strict";

// 1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
// 2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

const animals = [
    {
        name: "Ali",
        type: "Bear",
        age: 2,
    },
    {
        name: "Smith",
        type: "Cat",
        age: 1,
    },
    {
        name: "Jane",
        type: "Dog",
        age: 4,
    },
];

window.addEventListener("load", start);

function start(event) {
    console.log("Script is running");
    document.querySelector("#create-form").addEventListener("submit", createAnimal);

    showAnimals(sortAnimals(animals));
}

function sortAnimals(animals) {
    return animals.sort((animal1, animal2) => animal1.age - animal2.age);
}

function showAnimals(animals) {
    document.querySelector("tbody").innerHTML = "";

    for (const animal of animals) {
        showAnimal(animal);
    }
}

function showAnimal(animal) {
    const html = /*html*/ `
    <tr>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
    </tr>
    `;

    document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}

function createAnimal(event) {
    event.preventDefault();
    const form = event.target;
    console.log(form);

    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;

    const newAnimal = { name, type, age };
    animals.push(newAnimal);
    showAnimals(sortAnimals(animals));
}
