// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadge = [];

function renderLicenseBadge(license) {

switch(license) {

  case 'Apache':
    licenseBadge = ['![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'];
    break;

  case 'BSD 3':
    licenseBadge = ['![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'];
    break;

  case 'BSD 2':
    licenseBadge = ['![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'];
    break;

  case 'GNU':
    licenseBadge = ['![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'];
    break;

  case 'MIT':
    licenseBadge = ['![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'];
    break;

  case 'Mozilla':
    licenseBadge = ['![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'];
    break;

  case 'Eclipse':
    licenseBadge = ['![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'];
    break;

  case 'WTFPL':
      licenseBadge = ['![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'];
      break;

  default:
      licenseBadge = ['NA'];
      break;

}





}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README





function generateMarkdown(data) {
  console.log(data);
  renderLicenseBadge(`${data.license}`);
  console.log(`${data.license}`);
  console.log(licenseBadge[0]);
  console.log(`${licenseBadge[0]}`);


  return `
  
  ${licenseBadge[0]}
  
  # ${data.title}

  ## Description

  ${data.projectDescription}


  ## Table of Contents
    -[Installation](#Installation)
    -[Usage](#Usage)
    -[Credits](#Credits)
    -[Tests](#Tests)
    -[Questions](#Questions)

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}

  ![]()


  ## Credits

  ${data.contributors}


  ## Tests

  ${data.tests}


  ## Questions

  Please reach me with the following:
  github.com/${data.github}
  ${data.email}

  ## License

  ${data.license}


`;
}

module.exports = generateMarkdown;
