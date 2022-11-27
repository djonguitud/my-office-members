'use strict';

import Engineer from '../lib/Engineer.js';

test('Deberá crearse un objeto de ingenerio con nombre, id y correo electrónico', () => {
	const employeeOne = new Engineer(
		'Diego',
		6621,
		'djonguitud@gmail.com',
		'djonguitud'
	);

	expect(employeeOne.name).toBe('Diego');
	expect(employeeOne.id).toBe(6621);
	expect(employeeOne.email).toBe('djonguitud@gmail.com');
	expect(employeeOne.github).toBe('djonguitud');
});
