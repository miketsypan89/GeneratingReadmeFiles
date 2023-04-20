// TODO: Include packages needed for this application
const generateMarkdown = require("./markdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },


];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
            console.log(generateMarkdown(answers))
            generateMarkdown(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
