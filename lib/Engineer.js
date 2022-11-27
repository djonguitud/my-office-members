'use strict';

import Employees from './Employess.js';

class Engineer extends Employees {
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

export { Engineer };
