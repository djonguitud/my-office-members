'use strict';

import Employee from './Employess.js';

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}
	getRole() {
		console.log('Ingeniero');
	}
	getGithub() {
		console.log(this.github);
	}
}

export default Engineer;
