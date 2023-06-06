"use strict";

window.addEventListener("load", start);

let users = [];

async function start(event) {
    await getUsers();
    console.log(users);
    // showUsers(users)
    users.forEach(showUser);
    showUserRoles();
}

async function getUsers() {
    const response = await fetch("./users.json");
    const data = await response.json();
    users = data;
}

function showUsers(users) {
    for (let i = 0; i < users.length; i++) {
        showUser(users[i]);
    }
}

function showUser(user) {
    const html = /*html*/ `
    <li>${user.name}, Role: ${user.role}</li>
    `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function countUserRoles(role) {
    return users.filter((user) => user.role === role).length;
}

function showUserRoles() {
    document.querySelector("#admin-count").textContent = countUserRoles("admin");
    document.querySelector("#user-count").textContent = countUserRoles("user");
    document.querySelector("#guest-count").textContent = countUserRoles("guest");
}
