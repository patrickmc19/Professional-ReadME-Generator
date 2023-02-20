// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const readMeFile = ({ title, desc, inst, usage, cont, test, lic, git, email }) =>
    ``

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of you readme?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description for this readme.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Please explain the installion instructions.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please explain the usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please explain the contribution guidelines.',
        name: 'cont',
    },
    {
        type: 'input',
        message: 'What is the test command?',
        name: 'test',
    },
];

inquirer
    .prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();