'use strict';

import Employee from './Employess.js';

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	getRole() {
		console.log('Gerente');
	}
}

export default Manager;
