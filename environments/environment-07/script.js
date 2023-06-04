"use strict";

window.addEventListener("load", start);

let students = [];

function start(event) {
    console.log("script is running!");
    document.querySelector("#create-student-form").addEventListener("submit", submitForm);
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value
    const age = Number(form.age.value);

    createStudent(name, email, age)

    filterValidStudents();
}

function createStudent(name, email, age) {
    const newStudent = { name, email, age };
    students.push(newStudent);
}

function filterValidStudents() {
    const filteredStudents = students.filter(student => {
        const [prefix, sufix] = student.email.split("@");

        if (prefix.length >= 4 && sufix === "stud.kea.dk") {
            console.log("email valid");
            return true;
        } else {
            console.log("email invalid");
            return false;
        }
    })
    students = filteredStudents;
    console.log(students);
}

