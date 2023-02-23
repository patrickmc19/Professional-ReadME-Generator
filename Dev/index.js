const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of you readme?',
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'Please write a description for this readme.',
        name: 'desc',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'Please explain the installation instructions.',
        name: 'install',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'Please explain the usage information.',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'Please explain the contribution guidelines.',
        name: 'cont',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'What is the test command?',
        name: 'test',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'list',
        message: 'Which license should be used?',
        name: 'lic',
        choices: ['Apache 2.0', 'GPLv3', 'MIT', 'ISC', 'NA'],
        validate: (value) => { if (value) { return true } else { return 'Please select something to continue.' } },
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'git',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Please write something to continue.' } },
    },
])
    .then((answers) => {
        const readMeInfo = markdown(answers);
        // Function call to initialize app
        createNewFile("readme.md", readMeInfo);
    })

// TODO: Create a function to initialize app
function createNewFile(fileName, data) {
    // TODO: Create a function to write README file
    fs.appendFile(path.join(process.cwd(),fileName), data, (err) => {
        if (err) throw err;
        console.log("Congratulations on creating your new README!");
    }
    )
}