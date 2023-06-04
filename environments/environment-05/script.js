"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start(event) {
    console.log("script");
    sortCoursesAscendingDate();
    showCourses(courses);
}

function showCourses(courses) {
    
    for (let i = 0; i < courses.length; i++){
        showCourse(courses[i]);
    }
}

function showCourse(course) {
    const html = /*html*/ `
    <li>${course.name}, starting date: ${course.startDate}, ECTS: ${course.ectsPoints}</li>
    `;

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function sortCoursesAscendingDate() {
    courses.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}
