"use strict";

window.addEventListener("load", start);

let users = [];

async function start(event) {
    await getUsers();
    console.log(users);
    showUsers(users)
    showRoleCount(users)
}

async function getUsers() {
    const promise = await fetch("./users.json");
    users = await promise.json();
}

function showUsers(users) {
    
    for (const user of users) {
        showUser(user);
    }
}

function showUser(user) {
    const html = /*html*/`
    <li>${user.name} - Role: ${user.role}</li>
    `

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function getUserRolesCount(users, userRole) {
    return users.filter(user => user.role === userRole).length;
}

function showRoleCount(users) {
    document.querySelector("#admin-count").textContent = getUserRolesCount(users, "admin");
    document.querySelector("#user-count").textContent = getUserRolesCount(users, "user");
    document.querySelector("#guest-count").textContent = getUserRolesCount(users, "guest");
}