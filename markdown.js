const fs = require('fs')

// A function that returns a license badge based on which license is passed.
// If there is no license, an empty string will be returned.
function renderLicenseBadge(license) {
    switch (licenseName.toLowerCase()) {
        case 'mit':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'apache':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'gnu gplv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        default:
            return '';
            console.log(renderLicenseBadge);
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    fs.writeFile('./readme.txt',
        ` # ${data.title} # ${data.description} # ${data.email}`
    )
    return ` # ${data.title} # ${data.description} # ${data.email}`;


}

module.exports = generateMarkdown;
