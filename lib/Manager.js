'use strict';

import Employees from './Employess.js';

class Manager extends Employees {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	getRole() {
		console.log('Gerente');
	}
}

export { Manager };
