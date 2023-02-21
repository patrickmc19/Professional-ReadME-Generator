// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const readMeFile = ({ title, desc, inst, usage, cont, test, lic, git, email }) =>
    `# ${title}

    ## Description

    ${desc}
    
    ## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    Please do the following to install the application: ${inst}
    
    ## Usage
    
    ${usage}
        
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
        
    ## How to Contribute
    
    To contribute, here's a link to my github account https://github.com/${git}

    ## Contact Me

    For further questions or comments please email me - ${email}
    
    ## Tests
    
    ${test}`

// TODO: Create an array of questions for user input

inquirer
    .prompt(    {
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
    {
        type: 'choice'
    })
    .then((answers)=> {
        const readMeInfo = readmeFile(answers);

        fs.writeFile('readme.md', readMeInfo, (err) => {
            if (err) throw err;
            console.log('The file has been created and saved!');
          });
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();