const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'},
        {
        type: 'input',
        name: 'des',
        message: 'What is the description of your project?'},
        {
        type: 'input',
        name: 'install',
        message: 'What are the directions for install?',
        },{
        type: 'input',
        name: 'use',
        message: 'What will the app be used for?',
        },{
        type: 'list',
        name: 'License',
        message: 'Select a license',
        choices: [
            "Inquirer",
            "Node.js",
            "none"
        ]
        },{
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
        },{
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
        }


];

// function to write README file
function writeToFile(fileName, data) {
   
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers);
        fs.writeFile("README.md", generateMarkdown(answers), function(err){
            if (err){
                throw err;
            }
        })
    })

}

// function call to initialize program
init();
