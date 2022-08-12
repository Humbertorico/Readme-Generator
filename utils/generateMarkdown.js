
const fs = require('fs');
const inquirer = require ('inquirer');
const index = require ('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT'){
    badge = '![Github license](https://img.shields.io/github/license/Naereen/Strapdown.js.svg)'
  }else if (license === 'Apache 2.0'){
    badge = '![lincense](https://img.shields.io/badge/license-Apache%202.0blue.svg)'
  }else if (license === 'GPL v3.0'){
    badge = '![lincense: GPL v3](https://img.shields.io/badge/license-GPLv3-blue.svg)'
  }else{
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT'){
    licenseLink = 'https://choosealicense.com/license/mit/'
  }else if(license === 'Apache 2.0'){
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2-0'
  }else if (license === 'GPL v3.0'){
    licenseLink = 'https://www.gnu.org/licenses'
  }else(
    licenseLink = ''
  )
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let lincenseSection = ''
  if(license === 'none'){
    licenseSection = ''
  }else {
    licenseSection = 
    `lincense: $(license)`
  }
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  return `# ${answer.title}

  ##${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ###${renderLicenseLink(answer.license)}
  
  ## Table of contents:
  ### * [lincense](#license)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation:
  ### you must install the following for this app to function
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Contributors:
  ### ${answer.contributions}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${answer.test}

  ## Questions:
  ### If you have any question, you may contact me at either
  ### Github: https://github.com/${answer.askme}
  ### or
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
