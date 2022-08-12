// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "tittle",
        messeage: 'what is the tittle of your project?',
        validate: titleinput => {
            if (titleinput) {
                return true;
            } else {
                console.log('please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: "license",
        messeage: 'what license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('please select one of the four object');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "description",
        messeage: 'provide a project desciption',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('please provide a project description');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: "Installation",
        messeage: 'what steps are needed to install your porject?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('pleas provide steps for installation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "usage",
        messeage: 'what is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('please provide usage of project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "contribution",
        messeage: 'what guidline must other follow in order to to contribute?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('please enter contribution guidline');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "test",
        messeage: 'how do you test this project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('please provide how to test this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "askme",
        messeage: 'what is your Github username so other can reach out for questions?',
        validate: askmeInput => {
            if (askmeInput) {
                return true;
            } else {
                console.log('please provide Github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "email",
        messeage: 'what is your email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('please provide email');
                return false;
            }
        }
    }];

// TODO: Create a function to write README file
const writeToFile = filecontent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', filecontent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });

        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);
            var filecontent = generateMarkdown(answer);
            writeToFile(filecontent)
        });

}

// Function call to initialize app
init();

// exports
module.exports = questions;
