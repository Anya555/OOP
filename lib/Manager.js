const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) // accessing parent's properties
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager;