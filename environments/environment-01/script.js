"use strict";

window.addEventListener("load", initApp);

async function initApp() {
    const dataArray = await getData();
    loopUsers(dataArray)
    
    const adminArray = filterArray(dataArray)
    loopUsers(adminArray)


    
}

async function getData() {
    const response = await fetch("users.json");
    const data = await response.json();

    return data
}

function loopUsers(users) {

    for (const user of users) {
        showUser(user)
    }
    const html = /*html*/`
    <h2>=========</h2>
    `

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function showUser(objekt) {
    const html = /*html*/`
    <li>Name: ${objekt.name} - Status: ${objekt.active}</li>
    `

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

function filterArray(dataArray) {
    const resultArray = dataArray.filter(filterAdmins)

    function filterAdmins(objekt) {
        if (objekt.role == "admin") {
            return objekt
        }
    }

    return resultArray
}

