const fs = require("fs");
const inquirer = require("inquirer");

// Employee is a parent class
class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getName() {
         return this.name
     }

    getId() { 
       return this.id
    }

    getEmail() {
       return this.email
     }

    getRole() {
       return this.title
    }
}


class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, title, email) // accessing parent's properties
        this.officeNumber = officeNumber;
    }

    getRole() {
       return this.title
    }
}


class Engineer extends Employee {
    constructor(Github) {
        super(name, id, title, email); // accessing parent's properties
        this.Github = Github;
    }

    getGithub() {
       return this.Github
     }

    getRole() {
       return this.title
    }
}


class Intern extends Employee {
    constructor(school) {
        super(name, id, title, email); // accessing parent's properties
        this.school = school;
    }
    getSchool() {
       return this.school
     }

    getRole() {
       return this.title
    }
}




// using inquirer to get user input

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "office room number",
        message: "What is your manager's office room number?"
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "team member",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "Github username",
        message: "What is your engineer's Github username?"
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "team member",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your intern's school?"
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "team member",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }
])