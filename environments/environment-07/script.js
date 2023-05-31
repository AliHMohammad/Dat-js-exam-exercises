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
    const email = form.email.value;
    const age = Number(form.age.value);

    createStudent(name, email, age);
}

function createStudent(name, email, age) {
    const newStudent = { name, email, age };
    students.push(newStudent);
    console.log(students);
    checkCorrectEmail(newStudent);
}

function checkCorrectEmail(student) {
    const [prefix, sufix]  = student.email.split("@");

    console.log(prefix);
    console.log(sufix);

    if (prefix.length <= 4 || sufix !== "stud.kea.dk") {
        console.log("Deleting");
        const index = students.indexOf(student)
        students.splice(index, 1);
    }

    
    // if (!student.email.endsWith("@stud.kea.dk" || !student.email.length > 3)) {
    //     console.log("This user does not meet requirements. User removed");
    //     students.pop();
    // }

    console.log(students);
}