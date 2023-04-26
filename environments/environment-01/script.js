"use strict";

window.addEventListener("load", initApp);

async function initApp(event) {
    const data = await getData("users.json")
    console.log(data);
    showUsers(data);

    const admins = getFilteredData(data, "role", "admin");
    showUsers(admins)

}


async function getData(url) {
    const response = await fetch(url);
    const data = response.json();
    return data
}

function showUsers(users) {
    for (const user of users) {
        showUser(user)
    }
    
    const html =/*html*/`
    <h2>----------------</h2>
    `
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function showUser(user) {
    let activeStatus;
    if (user.active) {
        activeStatus = "Active"
    } else {
        activeStatus = "Inactive"
    }

    const html = /*html*/`
    <li>${user.name} - ${activeStatus}</li>
    `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function getFilteredData(list, key, parr) {
    return list.filter((user) => user[key] == parr)
}