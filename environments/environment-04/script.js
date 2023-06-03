"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start(event) {
    console.log(teachers);
    showTeachers(teachers);
    addNewTeacher("Ali", "almo@stud.kea.dk")
}

function showTeachers(teachers) {
    document.querySelector("#teachers-list").innerHTML = "";
    
    for (let i = 0; i < teachers.length; i++){
        showTeacher(teachers[i]);
    }
}

function showTeacher(teacher) {
    const html = /*html*/ `
    <li>${teacher.name} - E-mail: ${teacher.email}</li>
    `;

    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
}

function addNewTeacher(name, email) {
    const newTeacher = {name, email};

    teachers.push(newTeacher);
    showTeachers(teachers);
}