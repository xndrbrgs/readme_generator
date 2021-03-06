// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGenerate = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the name of your project?",
            },
            {
                type: "input",
                name: "about",
                message: "Enter a brief description of the project.",
            },
            {
                type: "input",
                name: "install",
                message: "What are the steps to be able to install this project?",
            },
            {
                type: "list",
                name: "licensing",
                message: "What licensing is ditributing this project?",
                choices: [
                    "Apache",
                    "Academic",
                    "GNU",
                    "ISC",
                    "MIT",
                    "Mozilla",
                    "Open"
                ],
                default: ['MIT'],
            },
            {
                type: "input",
                name: "contribute",
                message: "Explain the process for new users to contribute to this project.",
            },
            {
                type: "input",
                name: "testing",
                message: "Which commands need to be run in order for this project to commit tests?",
                default: "nmp test",
            },
            {
                type: "input",
                name: "contact",
                message: "What is your best contact email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
            },

        ]);
        
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        err ? console.log(err) : console.log('Successfully created README.md file!')
    })
}

// TODO: Create a function to initialize app
questions()
    .then(data => {
        return readmeGenerate(data);
    })
    .then(data => {
        return writeToFile(data);
    })