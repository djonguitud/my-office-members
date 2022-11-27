'use strict';

import Manager from '../lib/Manager.js';

test('Deberá crearse un objeto de manager con nombre, id, correo electrónico y número de oficina', () => {
	const employeeOne = new Manager('Elon Musk', 12, 'emusk@gmail.com', 424);

	expect(employeeOne.name).toBe('Elon Musk');
	expect(employeeOne.id).toBe(12);
	expect(employeeOne.email).toBe('emusk@gmail.com');
	expect(employeeOne.officeNumber).toBe(424);
});
