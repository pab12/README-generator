// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "what is the title of your project?"
  },
  {
    type: 'input',
    name: 'username',
    message: "What is your github name?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description for the README'
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are your installation instructions?',
    default: false
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for the application'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this application'
  },
  {
    type: "list",
    name: "license",
    message: "What licenses did you use?",
    choices: ["MIT","GPL", "Apache 2.0","BSD","none"],
    default: false
  }
]; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    if(err) {
        return console.log(err);
    }
 })
};

 //writeToFile("README.md");
// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((answers) => {
 const {title, username,email, description, install, usage,contributing,license} = answers;
  writeToFile('README.md',generateMarkdown(title, username,email, description,install,usage,contributing,license));

}); }

// Function call to initialize app
init();
