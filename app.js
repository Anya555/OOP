const fs = require("fs");
const inquirer = require("inquirer");

// get manager info
// write to log file
// go to function asking about type of person


// find out whether next person is engineer, intern, or finished
// if engineer
// ask engineer questions
// log engineer stuff
// ask again

// if intern
// same as above
// ask again

// if finished
// show final message



// Employee is a parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
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
        return this.role
    }
}


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


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // accessing parent's properties
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}


getManagerInfo();

function getManagerInfo() {
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
            name: "roomNum",
            message: "What is your manager's office room number?"
        }
    ]).then(answers => {
        answers.name;
        answers.id;
        answers.email;
        answers.roomNum;
        // create manager object w/ data supplied
        // log manager info to text file using manager object methods
        const manager = new Manager(answers.name, answers.id, answers.email, answers.roomNum);
        const managerInfo = [
            manager.getName(),
            manager.getId(),
            manager.getEmail(),
            manager.getRole()
        ].join("\n\n");
        fs.writeFile("log.txt", managerInfo, err => {
            if (err) throw err;


            "-".repeat(60);
        });

        getEmployeeType();
    })
}


function getEmployeeType() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of team member would you like to add?",
            name: "memberType",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore members"
            ]
        },
    ]).then(answers => {
        // switch statement
        switch (answers.memberType) {
            case 'Engineer':
                 
                    askEngineerQuestions();
               
                break;
            case 'Intern':
                 
                    askInternQuestions();
              
                break;
          
            default:
                console.log("Your text file has been generated");
                break;
        }
    });
}

function askEngineerQuestions() {
    inquirer.prompt([
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
            name: "githubUsername",
            message: "What is your engineer's Github username?"
        }
    ]).then(answers => {
        answers.name;
        answers.id;
        answers.email;
        answers.githubUsername;

        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
        const engineersInfo = [
            engineer.getName(),
        engineer.getId(),
        engineer.getEmail(),
        engineer.getRole(),
        engineer.getGithub(),
         ].join("\n\n");

        fs.appendFile("log.txt", engineersInfo, err => {
            if (err) throw err;

            //   console.log(managerInfo);
            "-".repeat(60);
        });

        getEmployeeType();
    });
}


    // inquirer stuff
    // after the questions, creae engineer object w/ daata supplied
    // write to log file using engineer methods
    // go to getEmployeeType()


function askInternQuestions() {
    // inquirer stuff
    // after the questions, create intern object w/ data suppplied
    // write to log file using intern methods
    // go to getEmployeeType()
}






//     {
//         type: "input",
//         name: "email",
//         message: "What is your intern's email?"
//     },
//     {
//         type: "input",
//         name: "school",
//         message: "What is your intern's school?"
//     },
//     {
//         type: "list",
//         message: "What type of team member would you like to add?",
//         name: "team member",
//         choices: [
//             "Manager",
//             "Engineer",
//             "Intern"
//         ]
//     }
// 


