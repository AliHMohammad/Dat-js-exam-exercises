"use strict";

//lav funktionen der tar 3 parametre og laver objektet. oBjektet psuhes.
// lave en funktion med en eventlistener på. I funktionen samler du form-værdierne i 3 variables som du sender videre i første funktion
// Lav showAnimals. showAnimals skal også indgå i første funktion. showAnimal skal vise alle 3 properties

//Klaret på 12:17 minutter

const animals = []

window.addEventListener("load", initApp);


function initApp(event) {
    console.log("script is working");
    document.querySelector("#create-form").addEventListener("submit", submitForm);

    showSortedAnimals()
}

function showSortedAnimals() {
    const sortedAnimals = animals.sort((animal1, animal2) => animal1.age - animal2.age)
    showAnimals(sortedAnimals)
}

function showAnimals(animals) {
    document.querySelector("#table-output").innerHTML = "";
    
    for (const animal of animals) {
        showAnimal(animal)
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

    document.querySelector("#table-output").insertAdjacentHTML("beforeend", html);
}

function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    
    const name = form.name.value;
    const type = form.type.value;
    const age = form.age.value;
    
    createAnimal(name, type, age);
}

function createAnimal(name, type, age) {
    const animal = { name, type, age };
    animals.push(animal)
    showSortedAnimals();
}

