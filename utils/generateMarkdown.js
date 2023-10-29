// Function to generate markdown for README
function generateMarkdown(data) {
  // Generate license badge based on the chosen license
  let licenseBadge;
  switch (data.license) {
      case 'MIT':
          licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          break;
      case 'Apache':
          licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          break;
      case 'GPL':
          licenseBadge = '[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)';
          break;
      case 'BSD':
          licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
          break;
      default:
          licenseBadge = '';
          break;
  }

  return `
# ${data.title} ${licenseBadge}

## Description
${data.description}

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

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}) or [visit my GitHub profile](https://github.com/${data.github}).

Live application link: ${data.link}
`;
}

module.exports = generateMarkdown;
