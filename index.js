// TODO: Include packages needed for this application
const generateMarkdown = require("./markdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "Name your project",
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

console.log(questions)