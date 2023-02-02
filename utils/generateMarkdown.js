// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badge = "![bow](https://img.shields.io/bower/l/bow)"


function renderLicenseBadge(license) {
  if(license !== "none"){
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="Github license">`;



  
   }
   return ""
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license !== "none"){
  return `* [license](#license)`
}
return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `## License \nThis project is licensed under the ${license} license.`;

  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title} 
  ${renderLicenseBadge(data.License)}

  # Description 

  ${data.Description}

  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  ${renderLicenseLink(data.License)}

  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)

  # Installation
  ${data.installation}
  
  # Usage

  ${data.Usage}

  ${renderLicenseSection(data.License)}

  # Contributing

 ${data.contributing}

  # Tests

 ${data.testing }

  # Questions 

  if you have any questions, you can email me @ ${data.Email}

  if you have want to see my work, you can see it @  [${data.username}](https://github.com/${
    data.username
  }/)



`;
}

module.exports = generateMarkdown;

"https://img.shields.io/bower/l/bow"