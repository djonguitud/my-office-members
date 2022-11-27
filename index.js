'use strict';

import inquirer from 'inquirer';
import Manager from './lib/Manager.js';
import { generateMenuQuestions } from './lib/menu.js';
import { generateEngineerInfo, generateInternInfo } from './lib/team.js';
import { teamMembers, generateTeamMemebrs } from './lib/teamMembers.js';

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
		const { name, id, email, officeNumber, menuOpt } = answers;
		const myManager = new Manager(name, id, email, officeNumber);
		generateTeamMemebrs(myManager);

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
