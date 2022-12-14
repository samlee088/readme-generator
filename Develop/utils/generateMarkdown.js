
let licenseBadge = [];

//function to create license badge depending on input
function renderLicenseBadge(license) {

switch(license) {

  case 'Apache':
    licenseBadge = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'];
    break;

  case 'BSD 3':
    licenseBadge = ['[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'];
    break;

  case 'BSD 2':
    licenseBadge = ['[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'];
    break;

  case 'GNU':
    licenseBadge = ['[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'];
    break;

  case 'MIT':
    licenseBadge = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'];
    break;

  case 'Mozilla':
    licenseBadge = ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'];
    break;

  case 'Eclipse':
    licenseBadge = ['[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'];
    break;

  case 'WTFPL':
      licenseBadge = ['[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'];
      break;

  default:
      licenseBadge = [''];
      break;

}};


let licenseLink = [];

//function to create a license link depending on license input
function renderLicenseLink(license) {


switch(license) {

  case 'Apache':
    licenseLink = ['[Apache License](https://opensource.org/licenses/Apache-2.0)'];
    break;

  case 'BSD 3':
    licenseLink = ['[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)']
    break;
  
  case 'BSD 2':
    licenseLink = ['[BSD 2 License](https://opensource.org/licenses/BSD-2-Clause)']
    break;

  case 'GNU':
    licenseLink = ['[GNU License](https://opensource.org/licenses/gpl-license)']
    break;

  case 'MIT':
    licenseLink = ['[MIT License](https://opensource.org/licenses/MIT)']
    break;
  
  case 'Mozilla':
    licenseLink = ['[Mozilla License](https://opensource.org/licenses/MPL-2.0)']
    break;

  case 'Eclipse':
    licenseLink = ['[Eclipse License](https://opensource.org/licenses/EPL-2.0)'];
    break;

  case 'WTFPL':
    licenseLink =['[WTFPL License](http://www.wtfpl.net/about/)']
    break;

  default :
  licenseLink = ['NA'];
  break;

}};


//function to create the markdown with a readme template
function generateMarkdown(data) {
 
  renderLicenseBadge(`${data.license}`);
  renderLicenseLink(`${data.license}`);


  return `
  
  ${licenseBadge[0]}
  
  # ${data.title}

  ## Description

  ${data.projectDescription}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}

  ![]()


  ## Contributing

  ${data.contributors}


  ## Tests

  ${data.tests}


  ## Questions

  Please reach me with any of the following:
  github.com/${data.github}
  ${data.email}

  ## License

  ${data.license}
  ${licenseLink[0]}


`;
}

module.exports = generateMarkdown;
