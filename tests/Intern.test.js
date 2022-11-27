'use strict';

import Intern from '../lib/Intern';

test('Deberá crearse un objeto de pasante con nombre, id y correo electrónico', () => {
	const employeeOne = new Intern(
		'Diego',
		6621,
		'djonguitud@gmail.com',
		'Tec de Monterrey'
	);

	expect(employeeOne.name).toBe('Diego');
	expect(employeeOne.id).toBe(6621);
	expect(employeeOne.email).toBe('djonguitud@gmail.com');
	expect(employeeOne.school).toBe('Tec de Monterrey');
});
