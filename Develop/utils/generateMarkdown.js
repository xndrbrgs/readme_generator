// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description

  ${data.about}

  ##Table of Contents
  *[Installation](#installation)
  *[Licensing](#license)
  *[Contributing](#contribute)
  *[Testing](#tests)
  *[Contact](#contact)

  ##Installation
  ${data.install}

  ##Licensing
  Distributed under ${data.licensing} licensing. 

  ##Contributing
  ${data.contribute}

  ##Testing
  ${data.testing}

  ##Contact
  If you have any questions regarding this project, feel free to contact me directly at ${data.contact}.
`;
}

module.exports = generateMarkdown;
