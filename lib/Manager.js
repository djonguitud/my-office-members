'use strict';

const Employees = require('./Employess');

class Manager extends Employees {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	getRole() {
		console.log('Gerente');
	}
}

module.exports = Manager;
