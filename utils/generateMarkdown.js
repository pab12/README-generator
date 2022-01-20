// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return`
  ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    return '* [license](#license)'
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return'## license'
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, username, email, description, install, usage,contributing,license) {
  return `# ${title}

## Description
${description}
## Table of Content

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(license)}
* [Test](#test)
* [Contributing](#contributing)
* [Questions](#questions)
## Installation
${install}
## Usage
 ${usage}
${renderLicenseSection(license)}
${renderLicenseBadge(license)}

## Test


## Contributing
${contributing}
### Questions
Here you can reach out to me through the following:
 * https://github.com/${username} 
 * ${email}
`;
}

module.exports = generateMarkdown;
