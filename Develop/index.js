
const fs = require('fs');
const inquirier = require('inquirer');
const markDown = require('./utils/generateMarkdown');

// Array of questions for inputs in the readme
const questions = 
[
    {   type: 'input',
        message:'What is the title of the project?',
        name: 'title',

    },
    {
        type: 'input',
        message:'What is the project description?',
        name:'projectDescription',

    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',

    },
    {
        type: 'input',
        message: 'What is the license?',
        name:'usage',

    },
    {
        type: 'input',
        message: 'Who are the contributors?',
        name: 'contributors',

    },
    {
        type: 'input',
        message: 'What are the tests?',
        name: 'tests',

    },
    {
        type: 'input',
        message: 'What are the questions?',
        name: 'questions',

    },
    {
        type: 'input',
        message: 'What is the github name?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the email address?',
        name:'email',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: ['none', 'Apache', 'BSD 3', 'BSD 2', 'GNU', 'MIT', 'Mozilla', 'Eclipse', 'WTFPL']
    }

];

//Creation of the readme file 
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    
    err ? console.error(err) : console.log('Success')
    );
    
};

//Function to start the prompt questions, and then take the response to create the file
function init() {
inquirier 
    .prompt(questions)
    .then((response) => {
        writeToFile('readMe.MD', markDown(response));
    })
};


// Function call to initialize app
init();
