const Employee = require('./Employee');

class Enginner extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);

        this.githubUsername = githubUsername;
    }
    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Enginner;