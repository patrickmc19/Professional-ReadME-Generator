// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  if(lic !== "NA"){
    `https://img.shields.io/badge/license-${lic}-green.svg`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {
  if(lic === "Apache 2.0"){
    `[![License](${renderLicenseBadge})](https://opensource.org/licenses/Apache-2.0)`
  }
  if(lic === "MIT"){
    "https://choosealicense.com/licenses/mit/"
  }
  if(lic === "GPLv3"){
    "https://choosealicense.com/licenses/gpl-3.0/"
  }
  if(lic === "ISC"){
    "https://choosealicense.com/licenses/isc/"
  }
  if(lic === "NA"){
    ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(lic) {
  if(lic === "Apache 2.0"){
    
  }
  if(lic === "MIT"){

  }
  if(lic === "GPLv3"){

  }
  if(lic === "ISC"){

  }
  if(lic === "NA"){
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  Please do the following to install the application: ${data.inst}
  
  ## Usage
  
  ${data.usage}
  
  ## License

  ${data.lic}

  ## How to Contribute
  
  To contribute, here's a link to my github account https://github.com/${data.git}

  Here are the guidelines: ${data.cont}

  ## Contact Me

  For further questions or comments please email me - ${data.email}
  
  ## Tests
  
  Here is the test command: ${data.test}`;
;
}

module.exports = generateMarkdown;