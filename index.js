// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs/promises")
const markdown = require("./utils/generateMarkdown")
const path = require("path");

// TODO: Create an array of questions for user input
//const questions = [Question1: "what is the name of your Project", Question2: ];
const askMe = [{
  type: 'input',
  message: 'What title is your repository?',
  name: 'title',
},
{
  type: 'input',
  message: 'Description about your project: ',
  name: 'Description',
},
{
  type: 'input',
  message: 'How to install your app?',
  name: 'installation',
},

{
  type: 'list',
  message: 'What kind of license do you have',
  name: 'License',
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],


}, {
  type: 'input',
  name: 'contributing',
  message: 'What does the user need to know about contributing to the repo?',

},
{type: 'input',
name: 'testing',
message: 'What command should we use to run test?',
},
{
  type: 'input',
  message: 'How do you use your app?',
  name: 'Usage',
},
{
  type: 'username',
  message: 'Github username?',
  name: 'username',
}
  ,
{
  type: 'Email',
  message: 'What is your email?',
  name: 'Email',
}
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(),"/dist",fileName ), data, function (err) {
    if (err) {
      console.log("did not go through");
    } else {
      console.log("success!!!")
      console.log(fileName);
      console.log(data)
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(askMe).then(function (data) {
    writeToFile("README.md", markdown(data));
    console.log(data);
  })
}

// Function call to initialize app
init();
//writeToFile()