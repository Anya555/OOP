//npm packages
const fs = require("fs");
const inquirer = require("inquirer");
// linking to files that have Employee class extensions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

getManagerInfo();

function getManagerInfo() {
    inquirer.prompt([
        //getting manager information 
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
    ]).then(answers => { // response from inquirer
        answers.name;
        answers.id;
        answers.email;
        answers.roomNum;
        // making manager object
        const manager = new Manager(answers.name, answers.id, answers.email, answers.roomNum);
        const managerInfo = [
            `Team`,
            "-".repeat(60), // makes dashes to separate different employes info
            "-".repeat(60),
            `Role: ${manager.getRole()}`,
            `Name: ${manager.getName()}`,
            `Id: ${manager.getId()}`,
            `Email: ${manager.getEmail()}`,
            `Office room number: ${manager.getOfficeNumber()}`,
            "-".repeat(60),
            "" //makes a line break
        ].join("\n"); //makes an empty line
        //printing received data to log.txt file
        fs.writeFile("log.txt", managerInfo, err => {
            if (err) throw err;
        });

        getEmployeeType();
    })
}


function getEmployeeType() {
    // prompting user to choose a team member type
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
        // switch statement executes a specific function based on selected member type
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
    //getting engineer information 
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
        // making Engineer object
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
        const engineersInfo = [
            `Role: ${engineer.getRole()}`,
            `Name: ${engineer.getName()}`,
            `Id: ${engineer.getId()}`,
            `Email: ${engineer.getEmail()}`,
            `Github username: ${engineer.getGithub()}`,
            "-".repeat(60),
            "" //makes an empty line break
        ].join("\n");
       //printing received data to log.txt file
        fs.appendFile("log.txt", engineersInfo, err => {
            if (err) throw err;
        });

        getEmployeeType();
    });
}


function askInternQuestions() {
    // getting intern info
    inquirer.prompt([
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
        }
    ]).then(answers => {
        answers.name;
        answers.id;
        answers.email;
        answers.school;
        // making intern object
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        const internsInfo = [
            `Intern: ${intern.getRole()}`,
            `Name: ${intern.getName()}`,
            `Id: ${intern.getId()}`,
            `Email: ${intern.getEmail()}`,
            `School: ${intern.getSchool()}`,
            "-".repeat(60),
            "" //makes an empty line break
        ].join("\n");
       //printing received data to log.txt file
        fs.appendFile("log.txt", internsInfo, err => {
            if (err) throw err;
        });

        getEmployeeType();
    });
}







