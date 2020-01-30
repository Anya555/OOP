const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id,  email); // accessing parent's properties
        this.Github = Github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.Github
    }
    getRole() {
        return this.role
    }
}

module.exports = Engineer;