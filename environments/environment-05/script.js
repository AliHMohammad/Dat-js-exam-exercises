"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start(event) {
    console.log("script is running");
    document.querySelector("#select-filter-ects").addEventListener("change", filterAndDisplayCourses);
    filterAndDisplayCourses()
}

function showCourses(courses) {
    document.querySelector("#courses-list").innerHTML = "";
    
    for (const course of courses) {
        showCourse(course)
    }
}

function showCourse(course) {
    
    const html = /*html*/ `
    <li>${course.name}, ECTS: ${course.ectsPoints}</li>
    `;

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

function filterAndDisplayCourses(event) {
    const filteredCourses = filter()
    showCourses(filteredCourses);
}

function filter() {
    const filterValue = document.querySelector("#select-filter-ects").value;
    return courses.filter((course) => course.ectsPoints === Number(filterValue));
}
