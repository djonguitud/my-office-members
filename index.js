'use strict';

const inquirer = require('inquirer');
const { generateMenuQuestions } = require('./lib/menu.js');
const { generateEngineerInfo, generateInternInfo } = require('./lib/team.js');
const { teamMembers, generateTeamMemebrs } = require('./lib/teamMembers.js');

inquirer
	.prompt([
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
		generateMenuQuestions(),
	])
	.then((answers) => {
		console.log(answers);
		generateTeamMemebrs(answers);

		const { menuOpt } = answers;

		switch (menuOpt) {
			case '0':
				console.log(teamMembers);
				break;
			case '1':
				generateEngineerInfo();
				break;
			case '2':
				generateInternInfo();
				break;
		}
	});
