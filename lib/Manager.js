const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) // accessing parent's properties
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager;