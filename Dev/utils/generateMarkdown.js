// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  let badge = "";
  if (lic !== "NA") {
    badge = `https://img.shields.io/badge/license-${lic}-green.svg`;
  }
  return badge = "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {
  let link;
  if (lic === "Apache 2.0") {
    link = `[![License](${badge})](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (lic === "MIT") {
    link = `[![License: MIT](${badge})](https://opensource.org/licenses/MIT)`;
  }
  if (lic === "GPLv3") {
    link = `[![License: GPL v3](${badge})](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (lic === "ISC") {
    link = `[![License: ISC](${badge})](https://opensource.org/licenses/ISC)`;
  }
  if (lic === "NA") {
    link = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(lic) {
//   if (lic == true) {

//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${link}
  ## Description

  ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  
  Please do the following to install the application: ${data.inst}
  
  ## Usage
  
  ${data.usage}
  
  ## License
 
  ${data.lic}

  ## Contributing

  Here are the contribution guidelines: ${data.cont}
  
  ## Tests
  
  Here is the test command: ${data.test}

  ## Questions

  For further questions or comments please email me: ${data.email}
  Here's a link to my github account: https://github.com/${data.git}`
  ;
}

module.exports = generateMarkdown;