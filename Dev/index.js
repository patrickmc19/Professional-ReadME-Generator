const inquirer = require('inquirer');
const fs = require('fs');

const readMeTemplate = ({ title, desc, inst, usage, cont, test, lic, git, email }) => `
    # ${title}

    ## Description

    ${desc}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    Please do the following to install the application: ${inst}
    
    ## Usage
    
    ${usage}
    
    ## License
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
        
    ## How to Contribute
    
    To contribute, here's a link to my github account https://github.com/${git}

    Here are the guidelines: ${cont}

    ## Contact Me

    For further questions or comments please email me - ${email}
    
    ## Tests
    
    Here is the test command: ${test}`;

inquirer.prompt(
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
        message: 'Please explain the installion instructions.',
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
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT License', 'ISC License', 'NA'],
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
)
    .then((answers) => {
        const readMeInfo = readMeTemplate(answers);
        // Function call to initialize app
        createNewFile(title, readMeInfo);
    })

// TODO: Create a function to initialize app
function createNewFile(fileName, data) {
    // TODO: Create a function to write README file
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) throw err;
        console.log("Congratulations on creating your new README!");
    }
    )
}