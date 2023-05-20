"use strict";

//Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties
//, og tilføjer objektet til den globale liste.Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
window.addEventListener("load", start);

let users = [];

async function start(event) {
    console.log("script is running");
    users = await getUsers();

    showUsers(filterActiveUsers(users));
}

function filterActiveUsers(users) {
    return users.filter((user) => user.active === true);
}

async function getUsers() {
    const response = await fetch("./users.json");
    const users = await response.json();
    return users;
}

function showUsers(users) {
    document.querySelector("#userlist").innerHTML = "";

    for (const user of users) {
        showUser(user);
    }
}

function showUser(user) {
    const html = /*html*/ `
    <li>${user.name} - ${showUserActivityStatus()}</li>
    `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);

    function showUserActivityStatus() {
        return user.active ? "Active" : "Not Active";
    }
}

function createUser(name, active, role) {
    const newUser = { name, active, role };
    users.push(newUser);
    showUsers(filterActiveUsers(users));
}
