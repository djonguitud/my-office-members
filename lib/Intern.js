'use strict';

import Employee from './Employess.js';

class Intern extends Employee {
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

export default Intern;
