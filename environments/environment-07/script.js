"use strict";

window.addEventListener("load", start);

let students = [];

function start(event) {
    console.log("SCript");
    document.querySelector("#create-student-form").addEventListener("submit", submitForm);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);

    createStudent(name, email, age);
}

function filterStudentsOver18() {
    return students.filter((student) => student.age > 18);
}

function sortStudentsByName(students) {
    return students.sort((a, b) => a.name.localeCompare(b.name));
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

function createStudent(name, email, age) {
    const newStudent = { name, email, age };
    students.push(newStudent);
    displayStudent();
}

function displayStudent() {
    const filteredStudents = filterStudentsOver18();
    showStudents(sortStudentsByName(filteredStudents));
    console.log(students);
}
