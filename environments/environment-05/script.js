"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start(event) {
    console.log(courses);
    sortCoursesAfterECTS();
    showCourses(courses);
}

function showCourses(courses) {
    for (let i = 0; i < courses.length; i++) {
        showCourse(courses[i]);
    }
}

function showCourse(course) {
    const html = /*html*/ `
    <li> ${course.name} - ${course.ectsPoints} ECTS points <button>Get Course Name</button></li>
    
    `;

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function sortCoursesAfterECTS() {
    courses.sort((a, b) => b.ectsPoints - a.ectsPoints);
}

