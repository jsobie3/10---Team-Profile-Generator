const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, github)

getRole(){
    return "Engineer"
}

getgithub(){
    return this.github
}

}

module.exports = Engineer;