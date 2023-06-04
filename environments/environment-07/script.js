"use strict";

const students = [];

window.addEventListener("load", start);

function start(event) {
    console.log("script is running");
    document.querySelector("#create-student-form").addEventListener("submit", submitForm);
    showStudents(students);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);

    createStudent(name, email, age);
    refreshListOfStudents();
}

function refreshListOfStudents() {
    const filteredStudents = filterStudentsOverAge(students, 18);
    const filteredAndSortedStudents = sortStudentsAscendingName(filteredStudents);
    showStudents(filteredAndSortedStudents);
}

function createStudent(name, email, age) {
    const newStudent = { name, email, age };
    students.push(newStudent);
}

function showStudents(students) {
    document.querySelector("#students-table-body").innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        showStudent(students[i]);
    }
}

function showStudent(student) {
    const html = /*html*/ `
    <tr>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
    </tr>
    `;

    document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
}

function filterStudentsOverAge(students, age) {
    return students.filter(student => student.age >= age)
}

function sortStudentsAscendingName(students) {
    return students.sort((a, b) => a.name.localeCompare(b.name));
}
