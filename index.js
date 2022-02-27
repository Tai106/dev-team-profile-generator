const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generate = require('./lib/generateHTML');

const fs = require("fs");
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name? (Required)',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Mangers ID?',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
        },
    ]);

    const promptEngineer = () => {
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            },
            {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',