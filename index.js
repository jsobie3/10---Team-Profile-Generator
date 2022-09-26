const fs = require('fs');
const inquirer = require('inquirer');


const Engineer = require ('./lib/Engineer');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');

const teamArray = [];

function createManager(){
    inquirer.prompt()[{
        type: "input",
        name: "managerName",
        message: "Manager's Name",

    }]
}




createManager();