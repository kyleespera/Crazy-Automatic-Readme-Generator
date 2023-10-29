// Required packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions array for user input
const questions = [
    { message: "What is the title of your project?", name: "title" },
    { type: "list", message: "What license would you like to use?", name: "license", choices: ["MIT", "Apache", "GPL", "BSD", "None"] },
    { message: "What is the description of your project?", name: "description" },
    { message: "Please provide detailed instructions for the installation of your project.", name: "installation" },
    { message: "Explain how to use for this application.", name: "usage" },
    { message: "What are the contribution guidelines for your project?", name: "contribution" },
    { message: "What are the test instructions for your project?", name: "tests" },
    { message: "What is your Github username?", name: "github" },
    { message: "What is your email address?", name: "email" },
    { message: "Please provide the link to your application.", name: "link" }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README file has been generated!");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => generateMarkdown(data))
        .then((data) => writeToFile("README.md", data));
}

// Function call to initialize app
init();
