'use strict';

import Employees from './Employess.js';

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

export { Intern };
