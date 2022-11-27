/* Finalmente, aunque no es un requisito, debe considerar agregar la validación para asegurar que la entrada de usuario proporcionada esté en el formato esperado adecuado. */
'use strict';

import Employee from '../lib/Employess.js';

test('Deberá crearse un objeto de empleado con nombre, id y correo electrónico', () => {
	const employeeOne = new Employee('Elon Musk', 12, 'emusk@gmail.com');

	expect(employeeOne.name).toBe('Elon Musk');
	expect(employeeOne.id).toBe(12);
	expect(employeeOne.email).toBe('emusk@gmail.com');
});
