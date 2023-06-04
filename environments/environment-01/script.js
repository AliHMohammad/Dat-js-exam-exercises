"use strict";

window.addEventListener("load", start);

let users = [];

async function start(event) {
    await getUsers();
    console.log(users);
    showUsers(users);
}

async function getUsers() {
    const response = await fetch("./users.json");
    users = await response.json();
}

function showUsers(users) {
    document.querySelector("#userlist").innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        showUser(users[i]);
    }
}

function showUser(user) {
    const html = /*html*/ `
    <li>${user.name} - ${user.active ? "Active" : "Inactive"}</li>
    `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function filterByRoleProperty(users, role) {
    const filteredArr = users.filter(getAdmins);

    function getAdmins(user) {
        if (user.role === role) {
            return true;
        } else {
            return false;
        }
    }

    return filteredArr
}

function filterCorrectMails(users) {
    const correctUsersMailArr = users.filter((user) => {
        const [prefix, sufix] = user.mail.split("@");

        if (prefix.length >= 5 && sufix === "stud.kea.dk") {
            return true;
        } else {
            return false;
        }
    })

    console.log(correctUsersMailArr);
}