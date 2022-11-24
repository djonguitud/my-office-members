'use strict';

const Employees = require('./Employess');

class Intern extends Employees {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}
	getSchool() {
		console.log(this.school);
	}
	getRole() {
		console.log('Interno');
	}
}

module.exports = Intern;
