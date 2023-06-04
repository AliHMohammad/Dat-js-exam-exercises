"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start(event) {
    console.log("script is running!");
    console.log(courses);
    showCourses(courses);
    document.querySelector("button").addEventListener("click", createCourse)
}

function showCourses(courses) {
    document.querySelector("#courses-list").innerHTML = "";

    for (let i = 0; i < courses.length; i++) {
        showCourse(courses[i]);
    }
}

function showCourse(course) {
    const html = /*html*/ `
    <li>${course.name} with ${course.teacher}, ECTS: ${course.ectsPoints}</li>
    `;

    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}

// function createCourse(name, startDate, endDate, ectsPoints, maxStudents, teacher) {
//     const newCourse = { name, startDate, endDate, ectsPoints, maxStudents, teacher };
//     courses.push(newCourse);
//     showCourses(courses);
// }

function createCourse(event) {
    const newCourse = {
        name: "Eksamen",
        startDate: "2023-06-12",
        endDate: "2023-06-12",
        ectsPoints: 15,
        maxStudents: 1,
        teacher: "Peter Lind",
    };

    courses.push(newCourse);
    showCourses(courses);
}

// createCourse("Eksamen", "2023-06-12", "2023-06-12", 15, 1, "Peter Lind");
