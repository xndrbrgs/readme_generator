// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.about}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Licensing](#license)
  - [Contributing](#contribute)
  - [Testing](#tests)
  - [Contact](#contact)

  ## Installation
  ${data.install}

  ## Licensing
  Distributed under ${data.licensing} licensing. 

  ## Contributing
  ${data.contribute}

  ## Testing
  ${data.testing}

  ## Contact
  If you have any questions regarding this project, feel free to contact me directly at ${data.contact}.
`;
}

module.exports = generateMarkdown;
