const fs = require("fs");
const inquirer = require("inquirer");

// Employee is a parent class
class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() { }

    getId() { }

    getEmail() { }

    getRole() { }
}

// Manager extends Employee
class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, title) // manager gets it's parent's (Employee) properties in addition to officeNumber
        this.officeNumber = officeNumber;
    }

    getRole() { }
}

// Engineer extends Employee

class Engineer extends Employee {
    constructor(Github) {
        super(name, id, title); // Engineer gets it's parent's (Employee) properties in addition to Github username
        this.Github = Github;
    }

    getGithub() { }

    getRole() { }
}

// Intern extends Employee
class Intern extends Employee {
    constructor(school) {
        super(name, id, title); // Intern gets it's parent's (Employee) properties in addition to school
        this.school = school;
    }
    getSchool() { }

    getRole() { }
}