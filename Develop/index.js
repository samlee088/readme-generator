// TODO: Include packages needed for this application
const fs = require('fs');
const inquirier = require('inquirer');


// TODO: Create an array of questions for user input
const questions = 
[
    {   type: 'input',
        message:'What is the title of the project?',
        name: 'Project Title',

    },
    {
        type: 'input',
        message:'What is the project description?',
        name:'projectDescription',

    },
    {
        type: 'input',
        message:'What is the table of contents',
        name: 'tableOfContents',

    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'What is the intended usage?',
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
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is the email address?',
        name:'email'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    
    err ? console.error(err) : console.log('Success')
    );
    
};



// TODO: Create a function to initialize app
function init() {
inquirier 
    .prompt(questions)
    .then((response) => {
        writeToFile('readMe.MD', JSON.stringify(response));
    })
};



// Function call to initialize app
init();
