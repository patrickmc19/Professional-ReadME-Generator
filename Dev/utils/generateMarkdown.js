// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  if(lic === "Apache License 2.0"){

  }
  if(lic === "MIT License"){

  }
  if(lic === "GNU GPLv3"){

  }
  if(lic === "ISC License"){

  }
  if(lic === "NA"){

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {
  if(lic === "Apache License 2.0"){
    "https://choosealicense.com/licenses/apache-2.0/"
  }
  if(lic === "MIT License"){
    "https://choosealicense.com/licenses/mit/"
  }
  if(lic === "GNU GPLv3"){
    "https://choosealicense.com/licenses/gpl-3.0/"
  }
  if(lic === "ISC License"){
    "https://choosealicense.com/licenses/isc/"
  }
  if(lic === "NA"){
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(lic) {
  if(lic === "Apache License 2.0"){

  }
  if(lic === "MIT License"){

  }
  if(lic === "GNU GPLv3"){

  }
  if(lic === "ISC License"){

  }
  if(lic === "NA"){
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;