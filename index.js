const inquirer = require('inquirer');

inquirer.prompt([
	{
		type: 'Input',
		name: 'name',
		message: 'Cuál es tu nombre?',
	},
	{
		type: 'Input',
		name: 'id',
		message: 'Cuál es tu ID de empleado?',
	},
	{
		type: 'Input',
		name: 'email',
		message: 'Cuál es tu email?',
	},
	{
		type: 'Input',
		name: 'officeNumber',
		message: 'Cuál es el número de oficina?',
	},
]);
